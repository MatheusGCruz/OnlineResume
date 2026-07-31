import { useState , useEffect, useRef, useCallback, useMemo } from 'react';
import { Cast, Captions, Volume2 } from 'lucide-react';
import useScreenSize from '../functions/ScreenSize';
import '../App.css';
import useConfigs from '../functions/Config';
import axios from "axios";

const CAST_SDK_URL = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1';
const NO_SUBTITLES = -1;

function Videos() {
  const [files, setFiles] = useState([]);
  const [videoId, setVideoId] = useState(null);
  const [castAvailable, setCastAvailable] = useState(false);
  const [castStatus, setCastStatus] = useState('');
  const [audioTracks, setAudioTracks] = useState([]);
  const [subtitleTracks, setSubtitleTracks] = useState([]);
  const [selectedAudioTrack, setSelectedAudioTrack] = useState(0);
  const [selectedSubtitleTrack, setSelectedSubtitleTrack] = useState(NO_SUBTITLES);
  

  const screenSize = useScreenSize();
  const configs = useConfigs();
  const videoRef = useRef(null);

    const isMkvVideo = useMemo(() => (
      videoId ? videoId.toLowerCase().endsWith('.mkv') : false
    ), [videoId]);

    const videoUrl = useMemo(() => {
      if (!videoId) {
        return '';
      }

      const params = new URLSearchParams();
      if (isMkvVideo) {
        params.set('audio', selectedAudioTrack);
        if (selectedSubtitleTrack !== NO_SUBTITLES) {
          params.set('subtitle', selectedSubtitleTrack);
        }
      }

      const query = params.toString();
      return `${isMkvVideo ? configs.mkvVideos : configs.videos}${encodeURIComponent(videoId)}${query ? `?${query}` : ''}`;
    }, [configs.mkvVideos, configs.videos, isMkvVideo, selectedAudioTrack, selectedSubtitleTrack, videoId]);

    const videoType = isMkvVideo ? 'video/x-matroska' : 'video/mp4';

    const getTrackLabel = (track, index, fallback) => {
      return track.label || track.language || `${fallback} ${index + 1}`;
    };

    const refreshMediaTracks = useCallback(() => {
      const video = videoRef.current;
      if (!video) {
        return;
      }

      const nextAudioTracks = Array.from(video.audioTracks || []);
      const nextSubtitleTracks = Array.from(video.textTracks || []);
      const activeAudioIndex = nextAudioTracks.findIndex((track) => track.enabled);
      const activeSubtitleIndex = nextSubtitleTracks.findIndex((track) => track.mode === 'showing');

      if (nextAudioTracks.length > 0) {
        setAudioTracks(nextAudioTracks.map((track, index) => ({
          id: track.id || `${track.kind || 'audio'}-${index}`,
          index,
          label: getTrackLabel(track, index, 'Audio'),
        })));
        setSelectedAudioTrack(activeAudioIndex >= 0 ? activeAudioIndex : 0);
      }

      if (nextSubtitleTracks.length > 0) {
        setSubtitleTracks(nextSubtitleTracks.map((track, index) => ({
          id: track.id || `${track.kind || 'subtitle'}-${index}`,
          index,
          label: getTrackLabel(track, index, 'Subtitle'),
        })));
        setSelectedSubtitleTrack(activeSubtitleIndex >= 0 ? activeSubtitleIndex : NO_SUBTITLES);
      }
    }, []);

    const initializeCast = useCallback(() => {
      if (!window.cast?.framework || !window.chrome?.cast) {
        return false;
      }

      const castContext = window.cast.framework.CastContext.getInstance();
      castContext.setOptions({
        receiverApplicationId: window.chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
        autoJoinPolicy: window.chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
      });
      castContext.addEventListener(
        window.cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
        (event) => {
          const sessionState = window.cast.framework.SessionState;
          if (event.sessionState === sessionState.SESSION_STARTED || event.sessionState === sessionState.SESSION_RESUMED) {
            setCastStatus('Connected to Cast');
          } else if (event.sessionState === sessionState.SESSION_ENDED) {
            setCastStatus('Cast ended');
          }
        }
      );
      setCastAvailable(true);
      return true;
    }, []);

    function playVideo(e, videoId){
      e.preventDefault();
      setVideoId(videoId);
      setAudioTracks([]);
      setSubtitleTracks([]);
      setSelectedAudioTrack(0);
      setSelectedSubtitleTrack(NO_SUBTITLES);
      if(videoRef.current){
        videoRef.current.pause()
        videoRef.current.removeAttribute('src')
        videoRef.current.load()
    }
    }

    const getFiles = useCallback(async() => {
      let response = await axios.get(
          configs.videoFiles);
          setFiles(response.data)    
    },[configs.videoFiles])

    useEffect(() => {
      getFiles();

    }, [getFiles])

    useEffect(() => {
      if (!videoId || !configs.videoTracks) {
        return;
      }

      const getServerTracks = async () => {
        try {
          const response = await axios.get(`${configs.videoTracks}${encodeURIComponent(videoId)}`);
          const audio = Array.isArray(response.data?.audio) ? response.data.audio : [];
          const subtitles = Array.isArray(response.data?.subtitles) ? response.data.subtitles : [];

          if (audio.length > 0) {
            setAudioTracks(audio.map((track, index) => ({
              id: `server-audio-${track.index ?? index}`,
              index: track.index ?? index,
              label: track.label || track.language || `Audio ${index + 1}`,
            })));
          }

          if (subtitles.length > 0) {
            setSubtitleTracks(subtitles.map((track, index) => ({
              id: `server-subtitle-${track.index ?? index}`,
              index: track.index ?? index,
              label: track.label || track.language || `Subtitle ${index + 1}`,
            })));
          }
        } catch (error) {
          console.warn('Unable to load server media tracks', error);
        }
      };

      getServerTracks();
    }, [configs.videoTracks, videoId])

    useEffect(() => {
      if (initializeCast()) {
        return;
      }

      window.__onGCastApiAvailable = (isAvailable) => {
        if (!isAvailable || !initializeCast()) {
          setCastAvailable(false);
          setCastStatus('Cast unavailable');
        }
      };

      if (!document.querySelector(`script[src="${CAST_SDK_URL}"]`)) {
        const script = document.createElement('script');
        script.src = CAST_SDK_URL;
        script.async = true;
        document.body.appendChild(script);
      }
    }, [initializeCast]);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) {
        return undefined;
      }

      const audioTrackList = video.audioTracks;
      const textTrackList = video.textTracks;

      audioTrackList?.addEventListener?.('addtrack', refreshMediaTracks);
      audioTrackList?.addEventListener?.('removetrack', refreshMediaTracks);
      audioTrackList?.addEventListener?.('change', refreshMediaTracks);
      textTrackList?.addEventListener?.('addtrack', refreshMediaTracks);
      textTrackList?.addEventListener?.('removetrack', refreshMediaTracks);
      textTrackList?.addEventListener?.('change', refreshMediaTracks);

      return () => {
        audioTrackList?.removeEventListener?.('addtrack', refreshMediaTracks);
        audioTrackList?.removeEventListener?.('removetrack', refreshMediaTracks);
        audioTrackList?.removeEventListener?.('change', refreshMediaTracks);
        textTrackList?.removeEventListener?.('addtrack', refreshMediaTracks);
        textTrackList?.removeEventListener?.('removetrack', refreshMediaTracks);
        textTrackList?.removeEventListener?.('change', refreshMediaTracks);
      };
    }, [refreshMediaTracks, videoId])

    const selectAudioTrack = (trackIndex) => {
      const video = videoRef.current;
      const tracks = video?.audioTracks;
      if (!tracks?.length) {
        setSelectedAudioTrack(trackIndex);
        return;
      }

      Array.from(tracks).forEach((track, index) => {
        track.enabled = index === trackIndex;
      });
      setSelectedAudioTrack(trackIndex);
    };

    const selectSubtitleTrack = (trackIndex) => {
      const video = videoRef.current;
      const tracks = video?.textTracks;
      if (!tracks?.length) {
        setSelectedSubtitleTrack(trackIndex);
        return;
      }

      Array.from(tracks).forEach((track, index) => {
        track.mode = index === trackIndex ? 'showing' : 'disabled';
      });
      setSelectedSubtitleTrack(trackIndex);
    };

    const startCast = async () => {
      if (!videoId || !videoUrl) {
        setCastStatus('Choose a video first');
        return;
      }

      if (!window.cast?.framework || !window.chrome?.cast) {
        setCastStatus('Cast is not ready in this browser');
        return;
      }

      try {
        const castContext = window.cast.framework.CastContext.getInstance();
        let session = castContext.getCurrentSession();
        if (!session) {
          await castContext.requestSession();
          session = castContext.getCurrentSession();
        }

        if (!session) {
          setCastStatus('No Cast session was selected');
          return;
        }

        const mediaInfo = new window.chrome.cast.media.MediaInfo(videoUrl, videoType);
        const metadata = new window.chrome.cast.media.GenericMediaMetadata();
        metadata.title = videoId;
        mediaInfo.metadata = metadata;

        const request = new window.chrome.cast.media.LoadRequest(mediaInfo);
        request.autoplay = !videoRef.current?.paused;
        request.currentTime = videoRef.current?.currentTime || 0;

        await session.loadMedia(request);
        setCastStatus('Casting video');
      } catch (error) {
        setCastStatus(error?.message || 'Cast request cancelled');
      }
    };
  
    return (   
        <div className="col" style={{width:"100%", height:"100%"}}>
          <div className="backgroundClass"  >
          <div className="innerText" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          {videoId}</div>
          
            <br />
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

            <video
              ref={videoRef}
              width="100%"
              height="auto"
              controls
              autoPlay
              onLoadedMetadata={refreshMediaTracks}
              onLoadedData={refreshMediaTracks}
            >
              {videoUrl && <source key={videoUrl} src={videoUrl} type={videoType}></source>}
              Error when playing
            </video>
            </div>
            <div className="videoControlBar">
              <button
                className="videoControlButton"
                onClick={startCast}
                disabled={!videoId || !castAvailable}
                title={castAvailable ? 'Cast to a Google Cast device' : 'Google Cast is unavailable in this browser'}
              >
                <Cast size={18} aria-hidden="true" />
                Cast
              </button>

              <label className="trackPicker">
                <Volume2 size={18} aria-hidden="true" />
                <select
                  value={selectedAudioTrack}
                  onChange={(event) => selectAudioTrack(Number(event.target.value))}
                  disabled={audioTracks.length === 0}
                  title="Audio track"
                >
                  {audioTracks.length === 0
                    ? <option value={0}>Audio tracks unavailable</option>
                    : audioTracks.map((track, index) => (
                      <option key={track.id} value={track.index}>{track.label}</option>
                    ))}
                </select>
              </label>

              <label className="trackPicker">
                <Captions size={18} aria-hidden="true" />
                <select
                  value={selectedSubtitleTrack}
                  onChange={(event) => selectSubtitleTrack(Number(event.target.value))}
                  disabled={subtitleTracks.length === 0}
                  title="Subtitle track"
                >
                  <option value={NO_SUBTITLES}>Subtitles off</option>
                  {subtitleTracks.map((track, index) => (
                    <option key={track.id} value={track.index}>{track.label}</option>
                  ))}
                </select>
              </label>
            </div>
            {castStatus && <div className="videoStatus">{castStatus}</div>}
        </div>
        
          
        <div style={{padding:.5*screenSize.verticalPadding}}>
          <div className="listContainer" style={{height:"24vh" , overflowY: 'auto',padding:'8px'}}>
            { files.map( (file) => <div key={file}><button style={{width:'100%', fontSize:.8*screenSize.font}} onClick={(e) =>{playVideo(e, file)}}>{file}</button></div>) }
          </div>
        </div>     
          </div>)
}

export default Videos;
