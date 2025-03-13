import shuriken from './shuriken.svg';
import './App.css';
import { useEffect, useState, useRef , useCallback} from 'react';

import { bake_cookie, read_cookie } from 'sfcookies';
import { motion, AnimatePresence } from "framer-motion";

import MainContent from './pages/MainContent';
import About from './pages/About';
import Languages from './pages/Languages';
import WebProjects from './pages/WebProjects';
import ApiProjects from './pages/ApiProjects';
import Sidebar from "./pages/SideBar";
import Videos from "./pages/Videos"
import Music from "./pages/Music"
import Weather from "./pages/Weather"
import Grafana from "./pages/Grafana"
import VBook from "./pages/VBook"
import Tanuki from "./pages/Tanuki"


function App() {

  const [loading, setLoading] = useState(true);
  const [innerHtml, setInnerHtml] = useState();
  const [burnKey, setBurnKey] = useState(0); 

  const sidebarRef = useRef(null);

  const handlePageChange = useCallback((pageIndex) => {
    setBurnKey((prevKey) => prevKey + 1);
    console.log("Reloading page...");
    bake_cookie("selectedPage", pageIndex);
    setInnerHtml(<div className="container"><Sidebar ref={sidebarRef} onPageChange={handlePageChange} /><Music/></div>)
    //window.location.reload();
  }, []);

  useEffect(() => {
    let pageCookie = read_cookie("selectedPage")
    if(!pageCookie || pageCookie <0 || pageCookie > 100){
      bake_cookie("selectedPage", 0);
    }

    if (!innerHtml){
      setInnerHtml(<div className="container"><Sidebar ref={sidebarRef} onPageChange={handlePageChange} /><About/></div>)
    }
    
    setLoading(false);
  }, [innerHtml, handlePageChange])


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
        <div className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={burnKey} // Key changes to reset animation
            initial={{ opacity: 0, scale: 1.2, filter: "brightness(200%) sepia(100%)" }}
            animate={{ opacity: 1, scale: 1, filter: "brightness(100%) sepia(0%)" }}
            exit={{ opacity: 0, scale: 0.8, filter: "brightness(50%) sepia(80%)" }}
            transition={{ duration: 1 }}
          >
            <About/>
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
      )
    }

  //Languages
  if(!loading && read_cookie("selectedPage") === 2){
    return(
    <div className="container">
      <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
      <div className="content">
      <AnimatePresence mode="wait">
        <motion.div
          key={burnKey} // Key changes to reset animation
          initial={{ opacity: 0, scale: 1.2, filter: "brightness(200%) sepia(100%)" }}
          animate={{ opacity: 1, scale: 1, filter: "brightness(100%) sepia(0%)" }}
          exit={{ opacity: 0, scale: 0.8, filter: "brightness(50%) sepia(80%)" }}
          transition={{ duration: 1 }}
        >
          <Languages/>
        </motion.div>
      </AnimatePresence>
    </div></div>
    )
  }

  //WebProjects
  if(!loading && read_cookie("selectedPage") === 3){
    return(
    <div className="container">
      <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
      <div className="content">
      <AnimatePresence mode="wait">
        <motion.div
          key={burnKey} // Key changes to reset animation
          initial={{ opacity: 0, scale: 1.2, filter: "brightness(200%) sepia(100%)" }}
          animate={{ opacity: 1, scale: 1, filter: "brightness(100%) sepia(0%)" }}
          exit={{ opacity: 0, scale: 0.8, filter: "brightness(50%) sepia(80%)" }}
          transition={{ duration: 1 }}
        >
          <WebProjects/>
        </motion.div>
      </AnimatePresence>
    </div></div>
    )
  }

  //ApiProjects
  if(!loading && read_cookie("selectedPage") === 4){
    return(
    <div className="container">
      <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
      <div className="content">
      <AnimatePresence mode="wait">
        <motion.div
          key={burnKey} // Key changes to reset animation
          initial={{ opacity: 0, scale: 1.2, filter: "brightness(200%) sepia(100%)" }}
          animate={{ opacity: 1, scale: 1, filter: "brightness(100%) sepia(0%)" }}
          exit={{ opacity: 0, scale: 0.8, filter: "brightness(50%) sepia(80%)" }}
          transition={{ duration: 1 }}
        >
          <ApiProjects/>
        </motion.div>
      </AnimatePresence>
    </div></div>
    )
  }

  //Music
  if(!loading && read_cookie("selectedPage") === 5){
    return(
    <div className="container">
      <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
      <div className="content">
      <AnimatePresence mode="wait">
        <motion.div
          key={burnKey} // Key changes to reset animation
          initial={{ opacity: 0, scale: 1.2, filter: "brightness(200%) sepia(100%)" }}
          animate={{ opacity: 1, scale: 1, filter: "brightness(100%) sepia(0%)" }}
          exit={{ opacity: 0, scale: 0.8, filter: "brightness(50%) sepia(80%)" }}
          transition={{ duration: 1 }}
        >
          <Music/>
        </motion.div>
      </AnimatePresence>
    </div></div>
    )
  } 

  //Videos
  if(!loading && read_cookie("selectedPage") === 6){
    return(
    <div className="container">
      <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
      <div className="content">
      <AnimatePresence mode="wait">
        <motion.div
          key={burnKey} // Key changes to reset animation
          initial={{ opacity: 0, scale: 1.2, filter: "brightness(200%) sepia(100%)" }}
          animate={{ opacity: 1, scale: 1, filter: "brightness(100%) sepia(0%)" }}
          exit={{ opacity: 0, scale: 0.8, filter: "brightness(50%) sepia(80%)" }}
          transition={{ duration: 1 }}
        >
          <Videos/>
        </motion.div>
      </AnimatePresence>
    </div></div>
    )
  }

    //Weather
    if(!loading && read_cookie("selectedPage") === 7){
      return(
      <div className="container">
        <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
        <div className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={burnKey} // Key changes to reset animation
            initial={{ opacity: 0, scale: 1.2, filter: "brightness(200%) sepia(100%)" }}
            animate={{ opacity: 1, scale: 1, filter: "brightness(100%) sepia(0%)" }}
            exit={{ opacity: 0, scale: 0.8, filter: "brightness(50%) sepia(80%)" }}
            transition={{ duration: 1 }}
          >
            <Weather/>
          </motion.div>
        </AnimatePresence>
      </div></div>
      )
    }
  

      //Grafana
      if(!loading && read_cookie("selectedPage") === 8){
        return(
        <div className="container">
          <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
          <div className="content">
          <AnimatePresence mode="wait">
            <motion.div
              key={burnKey} // Key changes to reset animation
              initial={{ opacity: 0, scale: 1.2, filter: "brightness(200%) sepia(100%)" }}
              animate={{ opacity: 1, scale: 1, filter: "brightness(100%) sepia(0%)" }}
              exit={{ opacity: 0, scale: 0.8, filter: "brightness(50%) sepia(80%)" }}
              transition={{ duration: 1 }}
            >
              <Grafana/>
            </motion.div>
          </AnimatePresence>
        </div></div>
        )
      }
      //VBook
      if(!loading && read_cookie("selectedPage") === 9){
        return(
        <div className="container">
          <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
          <div className="content">
          <AnimatePresence mode="wait">
            <motion.div
              key={burnKey} // Key changes to reset animation
              initial={{ opacity: 0, scale: 1.2, filter: "brightness(200%) sepia(100%)" }}
              animate={{ opacity: 1, scale: 1, filter: "brightness(100%) sepia(0%)" }}
              exit={{ opacity: 0, scale: 0.8, filter: "brightness(50%) sepia(80%)" }}
              transition={{ duration: 1 }}
            >
              <VBook/>
            </motion.div>
          </AnimatePresence>
        </div></div>
        )
      }
      //Tanuki
      if(!loading && read_cookie("selectedPage") === 10){
        return(
        <div className="container">
          <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
          <div className="content">
          <AnimatePresence mode="wait">
            <motion.div
              key={burnKey} // Key changes to reset animation
              initial={{ opacity: 0, scale: 1.2, filter: "brightness(200%) sepia(100%)" }}
              animate={{ opacity: 1, scale: 1, filter: "brightness(100%) sepia(0%)" }}
              exit={{ opacity: 0, scale: 0.8, filter: "brightness(50%) sepia(80%)" }}
              transition={{ duration: 1 }}
            >
              <Tanuki/>
            </motion.div>
          </AnimatePresence>
        </div></div>
        )
      }

  return (
    <div className="container">
      <Sidebar ref={sidebarRef} onPageChange={handlePageChange} />
      <div className="content">
      <AnimatePresence mode="wait">
        <motion.div
          key={burnKey} // Key changes to reset animation
          initial={{ opacity: 0, scale: 1.2, filter: "brightness(200%) sepia(100%)" }}
          animate={{ opacity: 1, scale: 1, filter: "brightness(100%) sepia(0%)" }}
          exit={{ opacity: 0, scale: 0.8, filter: "brightness(50%) sepia(80%)" }}
          transition={{ duration: 1 }}
        >
          <MainContent/>
        </motion.div>
      </AnimatePresence>
    </div></div>
    )

}

export default App;
