import './App.css';
import Aboutme from './components/pages/Aboutme';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
   </Router>
  );
}

export default App;
