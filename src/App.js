import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styleSheets/index.css'

function App() {
  return (
    <div className="container-fluid px-0" id="root">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
