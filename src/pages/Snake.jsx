import useScreenSize from '../functions/ScreenSize';

function Snake (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://snake.antares.ninja/"  style={{width:screenSize.fullWidth, height:screenSize.height}} height="100em" frameborder="0" title="Antares Snake"></iframe>
    )
}

export default Snake