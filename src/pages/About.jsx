import '../App.css';
import { useState, useEffect } from "react";
import useScreenSize from '../functions/ScreenSize';

function About({ selectedLanguage }) {
  const slides = [
    { id: 1, content: "Welcome to my personal online resume." },
    { id: 2, content: "Fullstack developer with a strong backend and support background." },
    { id: 3, content: "Mechatronics engineer, curious builder, and lifelong learner." },
    { id: 4, content: "Always learning, improving systems, and opening new possibilities." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const screenSize = useScreenSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="content">
      <div className="contentBackground" />
      <div
        className="textHeader"
        style={{ height: .13 * screenSize.height, width: .9 * screenSize.fullWidth, fontSize: 2 * screenSize.font }}
      >
        About
      </div>

      <div
        className="textContent"
        style={{ height: .65 * screenSize.height, width: .9 * screenSize.fullWidth, fontSize: screenSize.font }}
      >
        <p>I'm Matheus Goncalves Cruz, a Mechatronics Engineer graduated from the Federal University of Uberlandia.</p>
        <p>My IT career started through project work that brought a wide range of practical experiences, including the difficult ones that teach the most.</p>
        <p>I worked for a few months as a computer teacher before moving into software development.</p>
        <p>My first developer role began with SQL development, then expanded into backend systems, support, and system analysis.</p>
        <br />
        <p>Today, I work as a fullstack developer with a strong focus on backend development, system analysis, and production support.</p>
        <p>I have worked with different languages, frameworks, and databases across web applications, APIs, integrations, and internal tools.</p>
        <p>Backend: Java, C#, C++, C, VB.Net, ASP.NET, Node.js</p>
        <p>Frontend: HTML, CSS, React.js, Angular</p>
        <p>Databases: MSSQL, MySQL, PostgreSQL, MongoDB, CosmosDB, Oracle</p>
      </div>

      <div
        className="textHeader"
        style={{ height: .13 * screenSize.height, width: .9 * screenSize.fullWidth, fontSize: 2 * screenSize.font }}
      >
        <div className="slide">{slides[currentIndex].content}</div>
      </div>
    </div>
  );
}

export default About;
