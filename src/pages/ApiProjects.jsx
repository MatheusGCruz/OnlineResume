import '../App.css';
import { useState, useEffect } from "react";
import useScreenSize from '../functions/ScreenSize';

function ApiProjects ({selectedLanguage}){

      const [currentIndex, setCurrentIndex] = useState(0);
      const screenSize = useScreenSize();
    
    const slides = [
        { id: 1, content: "🌍 Welcome to the world!" },
        { id: 2, content: "🚀 React makes UI dynamic!" },
        { id: 3, content: "🎨 Customize your slides!" },
        { id: 4, content: "💡 Keep learning every day!" }
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
                    <br/>Projetos (API):</div>

                <div className='textContent' style={{height:.6*screenSize.height,width:.9*screenSize.fullWidth, fontSize:screenSize.font}}>
                    Projetos (WEB):
                    
                <p>Java  </p>
                <p>C#</p>
                <p>SQL</p>
                </div>

                <div className="slideshow">
                    <div className="slide">{slides[currentIndex].content}</div>
                </div>
            </div>
    )
}

export default ApiProjects