import useScreenSize from '../functions/ScreenSize';

function Vbook (){
    const screenSize = useScreenSize();
    
    return(
        <iframe src="https://vbook.antares.ninja/" title="VBook - ReactJS + NodeJS system" style={{width:.9*screenSize.fullWidth, height:.9*screenSize.height}}></iframe>
    )
}

export default Vbook