import useScreenSize from '../functions/ScreenSize';

function Santa (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://santa.tanuki.click"  style={{width:screenSize.fullWidth, height:screenSize.height}} height="100em" frameBorder="0" title="Santa Tanuki - Santa Secret generator"></iframe>
    )
}

export default Santa
