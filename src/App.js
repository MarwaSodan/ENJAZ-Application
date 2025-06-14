import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Home/Home';
import About from './components/About/About';
import Download from './components/Download/Download';
import JoinUs from './components/ContactUs/ContactUs';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Download />
      <JoinUs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;


