import '../App.css';
import { forwardRef, useImperativeHandle, useState } from "react";

const Sidebar = forwardRef(({onPageChange}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);

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
        <p  className="sidebarItem" onClick={() => selectPage(1)}>🏠 Sobre</p>
        <p  className="sidebarItem" onClick={() => selectPage(2)}>👤 Linguagens</p>
        <p  className="sidebarItem" onClick={() => selectPage(3)}>⚙️ Projetos WEB</p>
        <p  className="sidebarItem" onClick={() => selectPage(4)}>⚙️ Projetos API</p>
        <p  className="sidebarItem" onClick={() => selectPage(5)}>⚙️ Musicas</p>
        <p  className="sidebarItem" onClick={() => selectPage(6)}>⚙️ Videos</p>
        <p  className="sidebarItem" onClick={() => selectPage(7)}>❄️ Weather </p>
      </nav>
    </div>
  );
});

export default Sidebar;