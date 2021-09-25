import About from './components/About'
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styleSheets/index.css'

function App() {
  return (
    <div className="container-fluid px-0">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
