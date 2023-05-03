import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/HeroSection"
import FighterSection from './components/FighterSection';
import FightCard from './components/FightCard';


class UFCMain extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero/>
        <FighterSection/>
        <FightCard/>
      </div>
    );
  }
}

export default UFCMain;