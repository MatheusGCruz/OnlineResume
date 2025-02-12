import { useState  } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import MkvVideoPlayer from '../components/MkvVideoPlayer';
import VideoFilesList from "../components/VideoFilesList";
import useScreenSize from '../functions/ScreenSize';

function Videos() {

    const [videoId, setVideoId] = useState(null);
    const screenSize = useScreenSize();

    function playVideo(e, videoId){
      e.preventDefault();
      setVideoId(videoId);
    }
  
    function playMkvVideo(e, videoId){
      e.preventDefault();
      setVideoId(videoId);
    }

    return (
      <div class="container" > 
   
        <div class="col" style={{width:screenSize.fullWidth, height:screenSize.height}}>
            <br />
            <VideoFilesList />        
          </div>
      </div>
)
}

export default Videos;