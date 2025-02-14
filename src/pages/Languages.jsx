import '../App.css';
import useScreenSize from '../functions/ScreenSize';

function Languages ({selectedLanguage}){
    const screenSize = useScreenSize();
    return(
          <div className="content">
            <div class="rowC">
                <div>
                <div className="textHeader" style={{height:.2*screenSize.height,width:.9*screenSize.width, fontSize:2*screenSize.font}}>
                    <br/>Idiomas:</div>

                <div className='textContent' style={{height:.6*screenSize.height,width:.9*screenSize.width, fontSize:screenSize.font}}>
                <p>Português - C2 - Nativo</p>
                <p>Inglês - C2 - Fluente </p>
                <p>Espanhol - C1 - Avançado </p>
                <p>Japonês - B1 - Intermediário</p>
                    </div></div>

                    <div style={{height:.6*screenSize.height,width:.1*screenSize.width, fontSize:screenSize.font}}></div>

                    <div>
                    <div className="textHeader" style={{height:.2*screenSize.height,width:.9*screenSize.width, fontSize:2*screenSize.font}}>
                    <br/>Linguagens técnicas:</div>


                <div className='textContent' style={{height:.6*screenSize.height,width:.9*screenSize.width, fontSize:screenSize.font}}>
                    
                <p>Backend:</p><p>Java, C#, VB.Net, ASP.NET, NodeJS  </p> <br/>
                <p>Frontend:</p><p>React, HTML, CSS</p><br/>
                <p>Databases:</p><p>MSSQL, MySQL, MariaDB, PostgreSQL, OracleDB, CosmosDB, MongoDB</p><br/>
                </div></div>
                </div>
            </div>
    )
}

export default Languages