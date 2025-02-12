import React, {useEffect, useState} from 'react'
import MusicPlayer from './MusicPlayer';
import '../styles/General.css'
import useScreenSize from '../functions/ScreenSize';
import useConfigs from '../functions/Config';


import axios from "axios";


const MusicFilesList = () =>{
    const [files, setFiles] = useState([]);
    const [musicId, setMusicId] = useState(null);
    const screenSize = useScreenSize();
    const configs = useConfigs();


      function playMusic(e, musicId){
        e.preventDefault();
        setMusicId(musicId);
      }

      const getFiles = async() => {
        let response = await axios.get(
            configs.musicFiles);
            setFiles(response.data)    
      }

      useEffect(() => {
        getFiles();
      }, [])


    return (
      <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <MusicPlayer musicId={musicId}></MusicPlayer>
        </div>      
          
        <div style={{padding:'50px', border:'20px'}}>
            <div class="listContainer" style={{height:'50vh',overflowY: 'scroll',padding:'10px'}}>
                { files.map( (file) => <div><button style={{width:'100%', fontSize:.8*screenSize.font}} key={file} onClick={(e) =>{playMusic(e, file)}}>{file}</button></div>) }
            </div>
        </div>
      </div>
      )
}

export default MusicFilesList;