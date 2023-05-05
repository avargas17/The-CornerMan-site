import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/HeroSection"
import FighterSection from './components/FighterSection';
import FightCard from './components/FightCard';
import News from './components/News'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero/>
        <News/>
      </div>
    );
  }
}

export default App;

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
*/