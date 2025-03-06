import useScreenSize from '../functions/ScreenSize';

function Vbook (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://vbook.antares.ninja/" title="VBook - ReactJS + NodeJS system" style={{width:.95*screenSize.fullWidth, height:.95*screenSize.height}}></iframe>
    )
}

export default Vbook