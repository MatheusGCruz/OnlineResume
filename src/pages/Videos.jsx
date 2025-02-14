import { useState , useEffect, useRef } from 'react';
import useScreenSize from '../functions/ScreenSize';
import '../App.css';
import useConfigs from '../functions/Config';
import axios from "axios";

function Videos() {
  const [files, setFiles] = useState([]);
  const [videoId, setVideoId] = useState(null);
  

  const screenSize = useScreenSize();
  const configs = useConfigs();
  const videoRef = useRef(null)

    function playVideo(e, videoId){
      e.preventDefault();
      setVideoId(videoId);
      if(videoRef.current){
        videoRef.current.pause()
        videoRef.current.removeAttribute('src')
        videoRef.current.load()
    }
    }

    const getFiles = async() => {
      let response = await axios.get(
          configs.videoFiles);
          setFiles(response.data)    
    }

    useEffect(() => {
      getFiles();

    }, [])
  
    return (   
        <div class="col" style={{width:screenSize.fullWidth, height:screenSize.height}}>
          <div className="backgroundClass"  >
          <div className="innerText" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          {videoId}</div>
          
            <br />
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

            <video ref={videoRef} width={0.9*screenSize.fullWidth} height={0.6*screenSize.height} controls autoPlay>
              <source src={configs.videos+videoId} type='video/mp4'></source>
              Error when playing
            </video>
            </div>
        </div>
        
          
        <div style={{padding:.5*screenSize.verticalPadding, border:'20px'}}>
          <div class="listContainer" style={{height:.3*screenSize.height , overflowY: 'scroll',padding:'10px'}}>
            { files.map( (file) => <div><button style={{width:'100%', fontSize:.8*screenSize.font}} key={file} onClick={(e) =>{playVideo(e, file)}}>{file}</button></div>) }
          </div>
        </div>     
          </div>)
}

export default Videos;