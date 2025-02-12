import '../App.css';
import { useState, useEffect } from "react";
import WebProject from "./WebProject"
import tanuki from "../images/tanukiclick.png"
import tanuki2 from "../images/tanukiclick2.png"
import vbook1 from "../images/vbookComoFazerAmigos.png"
import vbook2 from "../images/vbookComoFazerAmigos2.png"
import vbook3 from "../images/vbookDracula.png"
import vbook4 from "../images/vbookDracula2.png"

function WebProjects ({selectedLanguage}){
      const slides = [
        { id: 1, content: <WebProject redirectUrl="https://tanuki.click" image={tanuki} description="Tanuki QR Code Generator"/>},
        { id: 1, content: <WebProject redirectUrl="https://tanuki.click" image={tanuki2} description="Tanuki QR Code Generator"/>},
        { id: 1, content: <WebProject redirectUrl="https://vbook.antares.ninja/ComoFazerAmigos" image={vbook1} description="Como Fazer Amigos - VBook"/>},
        { id: 1, content: <WebProject redirectUrl="https://vbook.antares.ninja/ComoFazerAmigos" image={vbook2} description="Como Fazer Amigos - VBook"/>},
        { id: 1, content: <WebProject redirectUrl="https://vbook.antares.ninja/Dracula" image={vbook3} description="Dracula - VBook"/>},
        { id: 1, content: <WebProject redirectUrl="https://vbook.antares.ninja/Dracula" image={vbook4} description="Dracula - VBook"/>},

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
            <div class="row">
              <h1> Web Projects</h1>
            </div>
            
            <div className="fullSlideshow">
              <div className="fullSlide">{slides[currentIndex].content}</div>
            </div>
          </div>
        </div>
    )
}

export default WebProjects