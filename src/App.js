import './App.css';
import Aboutme from './components/pages/Aboutme';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar.js/Navbar';
import Footer from './components/Footer/Footer';
import React,{useEffect,useState,useCallback} from 'react';


function App() {
  const [mobileCheck,setMobileCheck]=useState(false)

  const checkMobile= (input)=>{
    setMobileCheck(input)
    console.log(input)
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar checkMobile={checkMobile}/>} />
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/skills" element={<><Navbar checkMobile={checkMobile}/><Skills isMobile={mobileCheck}/><Footer/></>} />
        <Route path="/projects" element={<><Navbar checkMobile={checkMobile}/><Projects/><Footer/></>} />
        <Route path="/contact" element={<><Navbar checkMobile={checkMobile}/><Contact/><Footer/></>} />
      </Routes>
   </Router>
  );
}

export default App;
