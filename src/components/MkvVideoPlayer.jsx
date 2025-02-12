import React, {useRef, useEffect} from 'react'
import useScreenSize from '../functions/ScreenSize';
import useConfigs from '../functions/Config';



const MkvVideoPlayer = ({videoId}) =>{
    const videoRef = useRef(null)
    const screenSize = useScreenSize();
    const configs = useConfigs();

    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.pause()
            videoRef.current.removeAttribute('src')
            videoRef.current.load()
        }
    })

    return (
        <video ref={videoRef} width={0.9*screenSize.width} height={0.4*screenSize.height} controls autoPlay>
            <source src={configs.mkvVideos+videoId} type='video/mp4'></source>
            Error when playing
        </video>
    )
}

export default MkvVideoPlayer;