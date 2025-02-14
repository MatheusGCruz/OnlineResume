import { useState , useEffect } from 'react';
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
      <div class="row" style={{
        position: "relative",
        width: "100vw",
        height: "90vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity:1,
      }}> 
            
          <div class="rowC" style={{width:screenSize.fullWidth, height:screenSize.height}}>            
          <div style={{padding:'50px', border:'20px'}}>
          <div className="backgroundClass"  style={{width:screenSize.width, fontSize:.8*screenSize.font, height:.9*screenSize.height, display: 'flex',  justifyContent:'center', alignItems:'center',padding:'50px'}}>
              <div className="innerText" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              {musicId}</div>
              <br/>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  <audio src={configs.music+musicId} controls autoPlay>
                  Error when playing
                    </audio>
              </div>              
          </div>     
          </div>           
          <div style={{padding:'50px', border:'20px'}}>
            <div class="listContainer" style={{width:screenSize.width, fontSize:.8*screenSize.font, height:.9*screenSize.height,overflowY: 'scroll',padding:'10px'}}>
                { files.map( (file) => <div><button style={{width:'100%', fontSize:.8*screenSize.font}} key={file} onClick={(e) =>{playMusic(e, file)}}>{file}</button></div>) }
            </div>
          </div>      
        </div>
      </div>
)
}

export default Music;