import './App.css';
import Navigation from './components/navigation';
import About from './components/about';
import Experience from './components/experience';
import Work from './components/work';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
