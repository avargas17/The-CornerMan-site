import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/HeroSection"
import FighterSection from './components/FighterSection';
import FightCard from './components/FightCard';
import News from './components/News'
import Odds from './components/Odds'
import Schedule from './components/FightSchedule'
import Event from './components/Event'
import Footer from './components/Footer'


class Home extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Event/>
        <News/>
        <Footer/>
      </div>
    );
  }
}
export default Home