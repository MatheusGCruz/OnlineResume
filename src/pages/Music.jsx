import { useState  } from 'react';
import MusicFilesList from "../components/MusicFilesList";
import '../styles/Videos.css';
import useScreenSize from '../functions/ScreenSize';

function Music() {
  const screenSize = useScreenSize();

    return (
      <div class="row"> 
        
        <h1  style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding:20}}>Musics </h1>
        <div class="col" style={{backgroundColor:'blue'}}>

        </div>
        <div class="col" style={{width:screenSize.fullWidth, height:screenSize.height}}>
            <br />
            <MusicFilesList />        
          </div>
      </div>
)
}

export default Music;