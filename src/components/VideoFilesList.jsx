import React, {useEffect, useState} from 'react'
import VideoPlayer from './VideoPlayer';

import axios from "axios";
import useScreenSize from '../functions/ScreenSize';
import useConfigs from '../functions/Config';



const VideoFilesList = () =>{
    const [files, setFiles] = useState([]);
    const [videoId, setVideoId] = useState(null);

    const screenSize = useScreenSize();
    const configs = useConfigs();

      function playVideo(e, videoId){
        e.preventDefault();
        setVideoId(videoId);
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
      <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <VideoPlayer videoId={videoId}></VideoPlayer>
        </div>
        
          
        <div style={{padding:.5*screenSize.verticalPadding, border:'20px'}}>
          <div class="listContainer" style={{height:.3*screenSize.height ,overflowY: 'scroll',padding:'10px'}}>
            { files.map( (file) => <div><button style={{width:'100%', fontSize:.8*screenSize.font}} key={file} onClick={(e) =>{playVideo(e, file)}}>{file}</button></div>) }
          </div>
        </div>
      </div>
      )
}

export default VideoFilesList;

