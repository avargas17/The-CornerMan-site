import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Hero from './Bellator_hero'
import FighterSection from './Bellator_fighter'
import Event from "./Bellator_event"
import Footer from '../components/Footer'
import Schedule from './Bellator_schedule'


class OneMain extends Component {
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
export default OneMain;