import shuriken from './shuriken.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';

import { bake_cookie, read_cookie } from 'sfcookies';

import MainContent from './pages/MainContent';
import About from './pages/About';
import Languages from './pages/Languages';
import WebProjects from './pages/WebProjects';
import ApiProjects from './pages/ApiProjects';
import Sidebar from "./pages/SideBar";
import Videos from "./pages/Videos"
import Music from "./pages/Music"

function App() {

  const [loading, setLoading] = useState(true);

  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.toggle(); // Call the toggle function inside Sidebar
    }

  };

  const handlePageChange = (pageIndex) => {
    console.log("Reloading page...");
    bake_cookie("selectedPage", pageIndex);
    window.location.reload();
  };

  useEffect(() => {
    let pageCookie = read_cookie("selectedPage")
    if(!pageCookie || pageCookie <0 || pageCookie > 100){
      bake_cookie("selectedPage", 0);
    }
    setLoading(false);
  }, [])

  if(loading){
    return (

    
      <div className="App">
        <header className="App-header">
          <img src={shuriken} className="App-logo" alt="logo" />
          <p>
            Matheus Goncalves Cruz
          </p>
          <a
            className="App-link"
            href="https://antares.ninja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antares Ninja
          </a>
        </header>
      </div>
    );
  }

    //About
    if(!loading && read_cookie("selectedPage") === 1){
      return(
        <div className="container">
        <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
        <About/>
      </div>
      )
    }

  //Languages
  if(!loading && read_cookie("selectedPage") === 2){
    return(
      <div className="container">
      <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
      <Languages/>
    </div>
    )
  }

  //WebProjects
  if(!loading && read_cookie("selectedPage") === 3){
    return(
      <div className="container">
      <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
      <WebProjects/>
    </div>
    )
  }

  //ApiProjects
  if(!loading && read_cookie("selectedPage") === 4){
    return(
    <div className="container">
      <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
      <ApiProjects/>
    </div>
    )
  }

  //Music
  if(!loading && read_cookie("selectedPage") === 5){
    return(
    <div className="container">
      <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
      <Music/>
    </div>
    )
  }  

  //Videos
  if(!loading && read_cookie("selectedPage") === 6){
    return(
    <div className="container">
      <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
      <Videos/>
    </div>
    )
  }

  return(
    <div className="container">
      <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
      <MainContent/>
    </div>
  )

}

export default App;
