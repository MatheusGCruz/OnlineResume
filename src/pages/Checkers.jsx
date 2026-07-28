import useScreenSize from '../functions/ScreenSize';

function Checkers (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://checkers.antares.ninja/"  style={{width:screenSize.fullWidth, height:screenSize.height}} height="100em" frameBorder="0" title="Grafana - C# data collector"></iframe>
    )
}

export default Checkers
