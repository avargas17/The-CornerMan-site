import React from 'react';
import "./HeroSection.css"
import Fight from '../images/RDA.jpg'
function Hero() {
  return (
    <section className="hero">
    <img src={Fight} alt="walking shoes" autoPlay loop muted/>
      <h1>The Fight News</h1>
      <p>Get the best MMA news in the business from your CornerMan</p>
      <button>Get Started</button>
    </section>
  );
}

export default Hero;