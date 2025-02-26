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

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}>
      <button className="close-btn" onClick={() => setIsOpen(!isOpen)}></button>

      <div class="rowNav"  onClick={() => selectPage(0)}>
        <h2  className="sidebarItem" style={{fontSize:screenSize.font, color:"silver"}} > [☰] </h2> {isOpen && <h2 className="itemDescription" style={{fontSize:screenSize.font}}> Sidebar </h2>}   
      </div>  
      <nav>
        <div class="rowNav"  onClick={() => selectPage(1)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>🏠</p> {isOpen && <p className="itemDescription" style={{fontSize:screenSize.font}}>About</p>}          
        </div>        
        <div class="rowNav"  onClick={() => selectPage(2)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>🌐</p> {isOpen && <p className="itemDescription" style={{fontSize:screenSize.font}}>Languages</p>}
        </div>
        <div class="rowNav"  onClick={() => selectPage(3)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>🌐</p> {isOpen && <p className="itemDescription" style={{fontSize:screenSize.font}}>Web Projects</p>}
        </div>
        <div class="rowNav"  onClick={() => selectPage(4)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>⚙️</p> {isOpen && <p className="itemDescription" style={{fontSize:screenSize.font}}>API Projects</p>}
        </div>
        <div class="rowNav"  onClick={() => selectPage(5)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>🎼</p> {isOpen && <p className="itemDescription" style={{fontSize:screenSize.font}}>Musics</p>}
        </div>
        <div class="rowNav"  onClick={() => selectPage(6)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>📽️</p> {isOpen && <p className="itemDescription" style={{fontSize:screenSize.font}}>Videos</p>}
        </div>
        <div class="rowNav"  onClick={() => selectPage(7)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>❄️</p> {isOpen && <p className="itemDescription" style={{fontSize:screenSize.font}}>Weather</p> }
        </div>
        <div class="rowNav"  onClick={() => selectPage(8)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>📊</p> {isOpen && <p className="itemDescription" style={{fontSize:screenSize.font}}>Grafana</p> }
        </div>
        <div class="rowNav"  onClick={() => selectPage(9)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>📖</p> {isOpen && <p className="itemDescription" style={{fontSize:screenSize.font}}>VBook</p> }
        </div>
      </nav>
    </div>
  );
});

export default Sidebar;