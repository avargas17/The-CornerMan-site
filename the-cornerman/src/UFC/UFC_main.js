import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Hero from "./UFC-hero"
import FighterSection from '../components/FighterSection';
import FightCard from '../components/FightCard';
import Event from "./UFC-event"
import Footer from '../components/Footer'
import Schedule from '../components/FightSchedule'


class UFCMain extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Event/>
        <FighterSection/>
        <Schedule/>
        <Footer/>
      </div>
    );
  }
}

export default UFCMain;