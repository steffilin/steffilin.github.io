import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Intro from './Intro';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Intro />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
