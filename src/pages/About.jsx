import '../App.css';
import { useState, useEffect } from "react";

function About ({selectedLanguage}){

    


  const slides = [
    { id: 1, content: "🌍 Welcome to the world!" },
    { id: 2, content: "🚀 React makes UI dynamic!" },
    { id: 3, content: "🎨 Customize your slides!" },
    { id: 4, content: "💡 Keep learning every day!" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

    
    return(
        <div className="container">
          <div className="content">
                <div className="languages">
                    <h1 class="worldlanguage">
                    Sobre:
                    </h1>
                <p>Sou um engenheiro, formado pela Universidade Federal de Uberlândia</p>
                <p>Comecei minha carreira em TI a alguns anos, iniciando como um freelancer, em um projeto que resultou em varias experiências, algumas doloridas, porém todas úteis)</p>
                <p>Logo após isso, trabalhei como professor de informática, mudando depois para programador.</p>
                <p>Em meu primeiro serviço como programador, iniciei como um desenvolvedor SQL, migrando para backend</p>
                <br/>
                <p>Hoje, sou um desenvolvedor Fullstack, com enfâse em backend.</p>
                <p>Já trabalhei com diversas linguagens, frameworks e bancos de dados.</p>
                <p>Dentre eles:</p>
                <p>Backend: Java, C#, C++, C, VB.Net, Asp.net, etc</p>
                <p>Frontend: HTML, CSS, React.js, Angular, etc</p>
                <p>Database: MSSQL, MySQL, PostgreSQL, MongoDb, CosmosDB, Oracle</p>
                <br/>

                </div>

                <div className="slideshow">
                    <div className="slide">{slides[currentIndex].content}</div>
                    <div className="controls">
                        <button onClick={prevSlide}>⬅ Previous</button>
                        <button onClick={nextSlide}>Next ➡</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About