import '../App.css';
import { useState, useEffect } from "react";
import useScreenSize from '../functions/ScreenSize';

function ApiProjects ({selectedLanguage}){

      const [currentIndex, setCurrentIndex] = useState(0);
      const screenSize = useScreenSize();
    
      const slides = [
        { id: 1, content: "🌎 Welcome to my personal online resume. 🌎" },
        { id: 2, content: "🃏 Curiosity: I'm a jake of all trades. I'm even a professional certificated lifeguard 🃏" },
        { id: 3, content: "🧩 Personal Hobbies: Games, Animes and Swimming 🧩" },
        { id: 4, content: "💡 Always keep learning. Everytime you learn something new, you onpen your mind to new possibilities. 💡" }
      ];

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
    
    
    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval); // Cleanup on unmount
    });
    
    return(
          <div className="content">
                                <div className="textHeader" style={{height:.2*screenSize.height,width:.9*screenSize.fullWidth, fontSize:2*screenSize.font}}>
                    <br/>Some API projects in development:</div>

                <div className='textContent' style={{height:.6*screenSize.height,width:.9*screenSize.fullWidth, fontSize:screenSize.font}}>
                                       
                <h2>Java:</h2>
                <p>Enem Simulado - A telegram application that have a database of previous ENEM questions, and a random generation of questions, based on this database.</p>
                <p>Amigo Oculto - A santa's game for sorting people, to have a easiest way to avoid closed cycles </p>
                <p>QRCode - An API to generate a QR Code from a shortned link, avoiding overly complex QR Codes, for a easy reading from almost every camera</p>
                <br/>
                <h2>C#</h2>
                <p>Musics Repository - A streaming service of musics</p>
                <p>Videos Repository - A streaming service of videos</p>
                <p>VBook Repository - A repository of books to be used with the <a href="https://vbook.antares.ninja"> vbook.antares.ninja</a>  website.</p>
                <p>Weather Hangfire Job - A recurring job to fill the weather database</p>
                <p>Weather API - An API to retrive climate data for the <a href="https://weather.antares.ninja"> weather.antares.ninja</a> website.</p>
                <p>Cronos - A close to real-time recurring job system. Used to fill the Grafana database</p>
                </div>

                <div className="textHeader" style={{height:.13*screenSize.height,width:.9*screenSize.fullWidth, fontSize:2*screenSize.font}}>
                  <div className="slide">{slides[currentIndex].content}</div>
                </div>
            </div>
    )
}

export default ApiProjects