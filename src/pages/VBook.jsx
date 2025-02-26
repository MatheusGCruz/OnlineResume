import useScreenSize from '../functions/ScreenSize';

function Weather (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://vbook.antares.ninja/"  style={{width:screenSize.fullWidth, height:screenSize.height}} height="100em" frameborder="0" title="VBook - ReactJS + NodeJS system"></iframe>
    )
}

export default Weather