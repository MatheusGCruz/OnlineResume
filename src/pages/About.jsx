import '../App.css';
import { useState, useEffect } from "react";
import useScreenSize from '../functions/ScreenSize';

function About ({selectedLanguage}){

    


  const slides = [
    { id: 1, content: "🌎 Welcome to my personal online resume. 🌎" },
    { id: 2, content: "🃏 Curiosity: I'm a jake of all trades. I'm even a professional certificated lifeguard 🃏" },
    { id: 3, content: "🧩 Personal Hobbies: Games, Animes and Swimming 🧩" },
    { id: 4, content: "💡 Always keep learning. Everytime you learn something new, you onpen your mind to new possibilities. 💡" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const screenSize = useScreenSize();

  // Function to go to the next slide
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
            <div className="contentBackground"/>
                <div className="textHeader" style={{height:.13*screenSize.height,width:.9*screenSize.fullWidth, fontSize:2*screenSize.font}}>
                    <br/>About:</div>

                <div className='textContent' style={{height:.65*screenSize.height,width:.9*screenSize.fullWidth, fontSize:screenSize.font}}>

                <p>I'm a mechatronic's Engineer, graduated on Federal University of Uberlandia</p> 
                <p>My IT carrer started a few years ago, on a project that resulted in a lot of experiences(a few of them painful, but all useful)</p>
                <p>For a few months, I worked as a computer teacher, changing to a developer soon after.</p>
                <p>In my first developer role, I was asigned to a SQL developer role, later ingressing on a backend enviroment.</p>
                <br/>
                <p>Now, I'm a Fullstack developer, heavly focused on Backend, and system's analysis and support.</p>
                <p>Worked on diferent languages, frameworks and databases.</p>
                <p>To list some:</p>
                <p>Backend: Java, C#, C++, C, VB.Net, Asp.net, etc</p>
                <p>Frontend: HTML, CSS, React.js, Angular, etc</p>
                <p>Database: MSSQL, MySQL, PostgreSQL, MongoDb, CosmosDB, Oracle</p>
                <br/>

                
                </div>
                <div className="textHeader" style={{height:.13*screenSize.height,width:.9*screenSize.fullWidth, fontSize:2*screenSize.font}}>
                  <div className="slide">{slides[currentIndex].content}</div>
                </div>
            </div>
    )
}

export default About