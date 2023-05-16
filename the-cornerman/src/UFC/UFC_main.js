import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Hero from "../components/HeroSection"
import FighterSection from '../components/FighterSection';
import FightCard from '../components/FightCard';
import Event from "./UFC-event"


class UFCMain extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Event/>
        <FighterSection/>

      </div>
    );
  }
}

export default UFCMain;