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
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={() => setIsOpen(!isOpen)}></button>

      <h2 className="sidebarItem" onClick={() => selectPage(0)}>☰ Sidebar</h2>
      <nav>
        <div class="rowNav"  onClick={() => selectPage(1)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>🏠</p> <p className="itemDescription" style={{fontSize:screenSize.font}}>About</p>
        </div>        
        <div class="rowNav"  onClick={() => selectPage(2)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>🌐</p> <p className="itemDescription" style={{fontSize:screenSize.font}}>Languages</p>
        </div>
        <div class="rowNav"  onClick={() => selectPage(3)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>🌐</p> <p className="itemDescription" style={{fontSize:screenSize.font}}>Web Projects</p>
        </div>
        <div class="rowNav"  onClick={() => selectPage(4)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>⚙️</p> <p className="itemDescription" style={{fontSize:screenSize.font}}>API Projects</p>
        </div>
        <div class="rowNav"  onClick={() => selectPage(5)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>🎼</p> <p className="itemDescription" style={{fontSize:screenSize.font}}>Musics</p>
        </div>
        <div class="rowNav"  onClick={() => selectPage(6)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>📽️</p> <p className="itemDescription" style={{fontSize:screenSize.font}}>Videos</p>
        </div>
        <div class="rowNav"  onClick={() => selectPage(7)}>
          <p  className="sidebarItem" style={{fontSize:screenSize.font}}>❄️</p> <p className="itemDescription" style={{fontSize:screenSize.font}}>Weather</p> 
        </div>
      </nav>
    </div>
  );
});

export default Sidebar;