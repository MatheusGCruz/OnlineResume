import useScreenSize from '../functions/ScreenSize';

function Vbook (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://vbook.antares.ninja/" title="VBook - ReactJS + NodeJS system" style={{width:screenSize.fullWidth, height:screenSize.height}}></iframe>
    )
}

export default Vbook