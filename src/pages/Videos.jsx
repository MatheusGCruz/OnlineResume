import { useState , useEffect, useRef, useCallback } from 'react';
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

    const getFiles = useCallback(async() => {
      let response = await axios.get(
          configs.videoFiles);
          setFiles(response.data)    
    },[configs.videoFiles])

    useEffect(() => {
      getFiles();

    }, [getFiles])
  
    return (   
        <div className="col" style={{width:"100%", height:"100%"}}>
          <div className="backgroundClass"  >
          <div className="innerText" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          {videoId}</div>
          
            <br />
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

            <video ref={videoRef} width="100%" height="auto" controls autoPlay>
              <source src={configs.videos+videoId} type='video/mp4'></source>
              Error when playing
            </video>
            </div>
        </div>
        
          
        <div style={{padding:.5*screenSize.verticalPadding}}>
          <div className="listContainer" style={{height:"24vh" , overflowY: 'auto',padding:'8px'}}>
            { files.map( (file) => <div key={file}><button style={{width:'100%', fontSize:.8*screenSize.font}} onClick={(e) =>{playVideo(e, file)}}>{file}</button></div>) }
          </div>
        </div>     
          </div>)
}

export default Videos;
