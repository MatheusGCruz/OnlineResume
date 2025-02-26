import useScreenSize from '../functions/ScreenSize';

function Weather (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://tanuki.clik"  style={{width:screenSize.fullWidth, height:screenSize.height}} height="100em" frameborder="0" title="Tanuki - QR Generator and link shortner"></iframe>
    )
}

export default Weather