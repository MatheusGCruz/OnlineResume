import useScreenSize from '../functions/ScreenSize';

function Games (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://games.antares.ninja/"  style={{width:screenSize.fullWidth, height:screenSize.height}} height="100em" frameBorder="0" title="Tri Games"></iframe>
    )
}

export default Games
