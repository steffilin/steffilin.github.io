// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Intro from './Intro';
import Projects from './Projects';
import Contact from './Contact';
import Education from './Education';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        
        <div><Intro /></div>
        <div><Projects /></div>
        <div><Education /></div>
        {/* <div><Contact /></div> */}
      
    </div>
  );
}

export default App;
