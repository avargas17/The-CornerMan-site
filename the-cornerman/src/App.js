import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/HeroSection"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero/>
        <h1>Welcome to my React App!</h1>
      </div>
    );
  }
}

export default App;
