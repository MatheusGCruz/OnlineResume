import useScreenSize from '../functions/ScreenSize';

function Converter (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://converter.antares.ninja/"  style={{width:screenSize.fullWidth, height:screenSize.height}} height="100em" frameborder="0" title="Antares Converter"></iframe>
    )
}

export default Converter