import useScreenSize from '../functions/ScreenSize';

function Weather (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://grafana.antares.ninja/public-dashboards/9aca30bb16b444f9a8ca23b2c894f122"  style={{width:screenSize.fullWidth, height:screenSize.height}} height="100em" frameBorder="0" title="Grafana - C# data collector"></iframe>
    )
}

export default Weather
