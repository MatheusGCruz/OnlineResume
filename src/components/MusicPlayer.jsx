import React, {useRef, useEffect} from 'react'
import useConfigs from '../functions/Config';


const MusicPlayer = ({musicId}) =>{
    const musicRef = useRef(null)
    const configs = useConfigs();
    useEffect(()=>{
        if(musicRef.current){

        }
    })

    return (
        <audio src={configs.music+musicId} controls autoPlay>
            Error when playing
        </audio>
    )
}

export default MusicPlayer;