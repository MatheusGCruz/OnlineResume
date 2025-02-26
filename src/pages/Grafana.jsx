import useScreenSize from '../functions/ScreenSize';

function Weather (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://grafana.antares.ninja/public-dashboards/25fc110ace1649618de7129ccd06f91e"  style={{width:screenSize.fullWidth, height:screenSize.height}} height="100em" frameborder="0" title="Grafana - C# data collector"></iframe>
    )
}

export default Weather