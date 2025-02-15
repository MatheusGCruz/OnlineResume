import '../App.css';
import { useState, useEffect } from "react";
import WebProject from "./WebProject"
import tanuki from "../images/webPages/tanukiclick.png"
import tanuki2 from "../images/webPages/tanukiclick2.png"
import vbook1 from "../images/webPages/vbookComoFazerAmigos.png"
import vbook2 from "../images/webPages/vbookComoFazerAmigos2.png"
import vbook3 from "../images/webPages/vbookDracula.png"
import vbook4 from "../images/webPages/vbookDracula2.png"
import grafana1 from "../images/webPages/grafana1.JPG"
import grafana2 from "../images/webPages/grafana2.JPG"
import useScreenSize from '../functions/ScreenSize';

function WebProjects ({selectedLanguage}){
      const slides = [
        { id: 0, name:"Tanuki QR Generator" , description:"Tanuki QR Code Generator", content: <WebProject redirectUrl="https://tanuki.click" image={tanuki} description="Tanuki QR Code Generator"/>},
        { id: 1, name:"Tanuki QR Generator" , description:"Tanuki QR Code Generator", content: <WebProject redirectUrl="https://tanuki.click" image={tanuki2} description="Tanuki QR Code Generator"/>},
        { id: 2, name:"Vbook - Como Fazer Amigos" , description:"Vbook - Como fazer amigos e influenciar pessoas", content: <WebProject redirectUrl="https://vbook.antares.ninja/ComoFazerAmigos" image={vbook1} description="Como Fazer Amigos - VBook"/>},
        { id: 3, name:"Vbook - Como Fazer Amigos" , description:"Vbook - Como fazer amigos e influenciar pessoas", content: <WebProject redirectUrl="https://vbook.antares.ninja/ComoFazerAmigos" image={vbook2} description="Como Fazer Amigos - VBook"/>},
        { id: 4, name:"Vbook - Dracula" , description:"Vbook - Dracula", content: <WebProject redirectUrl="https://vbook.antares.ninja/Dracula" image={vbook3} description="Dracula - VBook"/>},
        { id: 5, name:"Vbook - Dracula" , description:"Vbook - Dracula", content: <WebProject redirectUrl="https://vbook.antares.ninja/Dracula" image={vbook4} description="Dracula - VBook"/>},
        { id: 6, name:"Grafana" , description:"Grafana - Local Server", content: <WebProject redirectUrl="https://grafana.antares.ninja/public-dashboards/25fc110ace1649618de7129ccd06f91e" image={grafana1} description="Grafana - Local Server"/>},
        { id: 7, name:"Grafana" , description:"Grafana - Local Server",content: <WebProject redirectUrl="https://grafana.antares.ninja/public-dashboards/25fc110ace1649618de7129ccd06f91e" image={grafana2} description="Grafana - Local Server"/>},

      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [webSiteDescription, setWebSiteDescription] = useState("");
      //const [webSiteName, setWebSiteName] = useState("");
      const screenSize = useScreenSize();
      let slideIndex = 0;
      let delayTime = 5000;
    
      // Function to go to the next slide
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        slideIndex = (slideIndex < slides.length-1?(slideIndex + 1):0);
        //setWebSiteName(slides[slideIndex].name);
        setWebSiteDescription(slides[slideIndex].description);
      };
    
      const setSlide = (slide) => {
        slideIndex= slide.id;
        setCurrentIndex(slide.id);
        //setWebSiteName(slide.name);
        setWebSiteDescription(slide.description);
      };
    
      // Auto-slide every 3 seconds
      useEffect(() => {
        const interval = setInterval(nextSlide, delayTime);
        return () => clearInterval(interval); // Cleanup on unmount
      });

    return(
          <div className="content">
            <div className="contentBackground"/>
            <div class="rowC">
              <div>
                <div className="textHeader" style={{width:.4*screenSize.fullWidth, height:.1*screenSize.height, fontSize:2*screenSize.font}}>
                  Web Projects
                </div>   
                <div className="textContent" style={{width:.4*screenSize.fullWidth, height:.3*screenSize.height}}>
                  { slides.map( (slide) => slide.id % 2 === 0?<div><button style={{width:'100%', fontSize:.8*screenSize.font}} key={slide} onClick={(e) =>{setSlide(slide)}}>{slide.name}</button></div> : null) }
                </div>
                <div className="textHeader" style={{width:.4*screenSize.fullWidth, height:.02*screenSize.height, fontSize:5*screenSize.fontSize}}>
                </div> 
                <div className="textContent" style={{width:.4*screenSize.fullWidth, height:.4*screenSize.height}}>
                  Descrição do Projeto
                  <br/>
                  <br/>
                  {webSiteDescription}
                  </div>
              </div>
            
            <div className="fullSlideshow" style={{width:.6*screenSize.fullWidth, height:.9*screenSize.height}}>
            <div className="textHeader" style={{width:.5*screenSize.fullWidth, height:.1*screenSize.height, fontSize:2*screenSize.font}}>
                {slides[currentIndex].name}
                </div>  
              <div className="fullSlide"style={{width:.5*screenSize.fullWidth}}>{slides[currentIndex].content}</div>
            </div>
            </div>
          </div>
    )
}

export default WebProjects