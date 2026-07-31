import { useState , useEffect, useCallback, useRef } from 'react';
import '../App.css';
import useScreenSize from '../functions/ScreenSize';
import background from "../images/concert-house.svg";
import useConfigs from '../functions/Config';


import axios from "axios";

function Music() {

  const [files, setFiles] = useState([]);
  const [musicId, setMusicId] = useState(null);
  const screenSize = useScreenSize();
  const configs = useConfigs();
  const audioRef = useRef(null); // Ref for the audio element
  const [timeLeft, setTimeLeft] = useState("0:00"); // Track time left
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [warning, setWarning] = useState("");


    function playMusic(e, musicId){
      e.preventDefault();
      setMusicId(musicId);
    }

    const getFiles = useCallback(async() => {
      let response = await axios.get(
          configs.musicFiles);
          setFiles(response.data)    
    }, [configs.musicFiles])

    useEffect(() => {
      getFiles();
      if (audioRef.current) {
        setTimeLeft(formatTime(audioRef.current.duration || 0));
        setDuration(audioRef.current.duration || 0);
        const interval = setInterval(() => {
        if (audioRef.current && !audioRef.current.paused) {
          setCurrentTime(audioRef.current.currentTime);
        }
      }, 500);

      return () => clearInterval(interval);
      }
    }, [getFiles, musicId])

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = volume;
      }
    }, [musicId, volume]);

    useEffect(() => {
      const handleDeviceChange = async () => {
        setWarning("⚠️ Audio output device may have changed!");
        pauseSong();
      };
  
      navigator.mediaDevices.addEventListener("devicechange", handleDeviceChange);
  
      return () => {
        navigator.mediaDevices.removeEventListener("devicechange", handleDeviceChange);
      };
    }, []);
  
    const formatTime = (seconds) => {
      if (isNaN(seconds) || seconds === Infinity) return "0:00";
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };
  
    const updateTimeLeft = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        const remaining = audioRef.current.duration - audioRef.current.currentTime;
        setTimeLeft(formatTime(remaining));
      }
    };

    const shuffleSong = () => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * files.length);
      } while (configs.music+files[randomIndex] === configs.music+musicId); // Prevent same song repeating
      setMusicId(files[randomIndex]);
    };

    const nextSong = () => {
      const currentIndex = files.indexOf(musicId);
      const nextIndex = (currentIndex + 1) % files.length; // Loop to first song after last
      setMusicId(files[nextIndex]);
    };

    const previousSong = () => {
      const currentIndex = files.indexOf(musicId);
      const nextIndex = (currentIndex - 1) % files.length; // Loop to first song after last
      setMusicId(files[nextIndex]);
    };

    const playSong = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    const pauseSong = () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    const handleVolumeChange = (event) => {
      const newVolume = event.target.value;
      setVolume(newVolume);
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
      }
    };
  
    const handleSeekChange = (event) => {
      const newTime = event.target.value;
      setCurrentTime(newTime);
      if (audioRef.current) {
        audioRef.current.currentTime = newTime;
      }
    };

    const handleMetadataLoaded = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
        setTimeLeft(formatTime(audioRef.current.duration));
      }
    };



    return (
      <div className={screenSize.orientationLandscape?"rowC":"colC"} style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity:1,
      }}> 
            
          <div className={screenSize.orientationLandscape?"rowC":"colC"} style={{width:"100%", height:"100%"}}>            
          <div style={{padding:'10px', width:"100%"}}>
            <div className="backgroundClass"  style={{width:"100%", fontSize:.8*screenSize.font, height:"calc(100vh - 40px)",padding:'14px', display:'flex', flexDirection:'column'}}>
                {warning && <div className="innerText" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{warning}</div>}
                <div className="innerText" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                {musicId}</div>
                <br/>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <audio 
                    ref={audioRef} 
                    key={musicId}   
                    autoPlay 
                    onEnded={shuffleSong}
                    onTimeUpdate={updateTimeLeft} 
                    onLoadedMetadata={handleMetadataLoaded}>
                    <source src={configs.music+musicId} type="audio/mpeg" />
                    Error when playing
                      </audio>
                </div>    
                <div  className="rowC" style={{width:"100%"}}>
                    <button className="innerText" onClick={shuffleSong}>🔀 Shuffle</button>                 
                    <button className="innerText" onClick={previousSong}>⏮️ Previous</button>  
                    <button className="innerText" onClick={pauseSong}>⏸️ Pause</button>   
                    <button className="innerText" onClick={playSong}>▶️ Play</button>    
                    <button className="innerText" onClick={nextSong}>⏭️ Next</button> 

                    <div className="innerText" >⏲️ - {timeLeft} - ⏲️</div>


                    <div className="innerText" >          
      <label>🔊 Volume</label>
      <input 
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      /> </div> 
                </div>   

        <div className="innerText" >
        <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeekChange}
        style={{ width: "100%" }}
      />
        </div>



        <div style={{flex:9, minHeight:0, display:'flex', flexDirection:'column'}}>
            <div className="listContainer visibleScrollbar" style={{width:"100%", fontSize:.9*screenSize.font, flex:1, minHeight:0, overflowY: 'auto',padding:'8px', direction:'rtl'}}>
                { files.map( (file) => <div key={file} style={{direction:'ltr'}}><button style={{width:'100%', fontSize:.8*screenSize.font}} onClick={(e) =>{playMusic(e, file)}}>{file}</button></div>) }
            </div>
          </div>  
          <div style={{flex:1}}/>
            </div>     
          </div>           
    
        </div>
      </div>
)
}

export default Music;
