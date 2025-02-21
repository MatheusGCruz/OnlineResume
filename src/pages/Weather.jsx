import useScreenSize from '../functions/ScreenSize';

function Weather (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://weather.antares.ninja/uberlandia"  style={{width:screenSize.fullWidth, height:screenSize.height}} height="100em" frameborder="0" title="Weather System webpage - VUE project"></iframe>

    )
}

export default Weather