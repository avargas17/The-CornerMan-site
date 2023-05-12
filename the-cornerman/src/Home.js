import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/HeroSection"
import FighterSection from './components/FighterSection';
import FightCard from './components/FightCard';
import News from './components/News'
import Odds from './components/Odds'


class Home extends Component {
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
export default Home