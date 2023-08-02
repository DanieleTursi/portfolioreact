import './App.css';
import Aboutme from './components/pages/Aboutme';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar.js/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/aboutme" element={<><Navbar/><Aboutme/></>} />
        <Route path="/skills" element={<><Navbar/><Skills/></>} />
        <Route path="/projects" element={<><Navbar/><Projects/></>} />
        <Route path="/contact" element={<><Navbar/><Contact/></>} />
      </Routes>
   </Router>
  );
}

export default App;
