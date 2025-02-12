import '../App.css';

function Languages ({selectedLanguage}){
    return(
        <div className="container">
          <div className="content">
                <div className="languages">
                    <h1 class="worldlanguage">
                    Idiomas:
                    </h1>
                <p>Português - C2 - Nativo</p>
                <p>Inglês - C2 - Fluente </p>
                <p>Espanhol - C1 - Avançado </p>
                <p>Japonês - B1 - Intermediário</p>
                <br/>
                <div class="programminglanguage">
                    <h1>Linguagens técnicas:</h1>
                <p>Java  </p>
                <p>C#</p>
                <p>SQL</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Languages