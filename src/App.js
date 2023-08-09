import './App.css';
import Aboutme from './components/pages/Aboutme';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar.js/Navbar';
import Footer from './components/Footer/Footer';
import useLocalStorage from './hooks/useLocalStorage';
import React,{useEffect,useState} from 'react';


function App() {
  const [isMobile, setIsMobile] = useLocalStorage("isMobile",'');
  const [innerWidth,setInnerWidth]=useState('')

  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize);
    setInnerWidth(window.innerWidth);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth != innerWidth]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/aboutme" element={<><Navbar/><Aboutme/><Footer/></>} />
        <Route path="/skills" element={<><Navbar/><Skills/><Footer/></>} />
        <Route path="/projects" element={<><Navbar/><Projects/><Footer/></>} />
        <Route path="/contact" element={<><Navbar/><Contact/><Footer/></>} />
      </Routes>
   </Router>
  );
}

export default App;
