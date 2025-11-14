import '../App.css';
import { forwardRef, useImperativeHandle, useState } from "react";
import useScreenSize from '../functions/ScreenSize';

const Sidebar = forwardRef(({onPageChange}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);
  const screenSize = useScreenSize();
  

  // Expose the `toggle` function to the parent via ref
  useImperativeHandle(ref, () => ({
    toggle: () => setIsOpen((prev) => !prev),
    isOpen, 
    selectedPage,
  }));

  const selectPage = (pageIndex) =>{
    setSelectedPage(pageIndex);
    onPageChange(pageIndex);
  };

  const handleRedirectClick = (hrefLink) => {
    window.location.href = hrefLink;
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}>
      <button className="close-btn" onClick={() => setIsOpen(!isOpen)}></button>

      {/* <div class="rowNav"  onClick={() => selectPage(0)}>
        <h2  className="sidebarItem" style={{fontSize:screenSize.font, color:"silver"}} > [☰] </h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}> Sidebar </h2>}   
      </div>  <br/>  */}

        <div class="rowNav"  onClick={() => selectPage(1)}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>🏠</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}>About</h2>}          
        </div>   <br/> 
        <div class="rowNav"  onClick={() => handleRedirectClick("https://www.linkedin.com/in/matheusgcruz/")}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>💼</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}> 🔗LinkedIn</h2> }
        </div><br/>  
        <div class="rowNav"  onClick={() => handleRedirectClick("https://github.com/MatheusGCruz")}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>🗃️</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}> 🔗 GitHub</h2> }
        </div>   <br/>   
        {/* <div class="rowNav"  onClick={() => selectPage(2)}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>🌐</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}>Languages</h2>}
        </div><br/>   */}
        {/* <div class="rowNav"  onClick={() => selectPage(3)}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>🌐</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}>Web Projects</h2>}
        </div><br/>   */}
        <div class="rowNav"  onClick={() => selectPage(4)}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>⚙️</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}>API Projects</h2>}
        </div><br/>  
        <div class="rowNav"  onClick={() => selectPage(5)}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>🎼</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}>Musics</h2>}
        </div><br/>  
        <div class="rowNav"  onClick={() => selectPage(6)}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>📽️</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}>Videos</h2>}
        </div><br/>  
        <div class="rowNav"  onClick={() => selectPage(7)}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>❄️</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}>Weather</h2> }
        </div><br/>  
        <div class="rowNav"  onClick={() => selectPage(8)}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>📊</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}>Grafana</h2> }
        </div><br/>  
        <div class="rowNav"  onClick={() => selectPage(9)}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>📖</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}>VBook</h2> }
        </div><br/>  
        <div class="rowNav"  onClick={() => selectPage(10)}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>🦝</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}>Tanuki</h2> }
        </div><br/>  
        <div class="rowNav"  onClick={() => selectPage(11)}>
          <h2  className="sidebarItem" style={{fontSize:screenSize.font}}>🌟</h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}>Santa Tanuki</h2> }
          </div>


    </div>
  );
});

export default Sidebar;