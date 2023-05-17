import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Hero from "./One_hero"
import FighterSection from './One_fighter'
import Event from "./One_event"
import Footer from '../components/Footer'
import Schedule from './ONE_schedule'


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