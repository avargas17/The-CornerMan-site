import React from 'react';
import backgroundImage from '../images/Conor.jpg';
import './HeroSection.css';

function Hero() {
  const heroStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
  };

  return (
    <section className="hero" style={heroStyle}>
      <h1>Fight News</h1>
      <p>Get the best MMA news in the business from your CornerMan</p>
      <button>Get Started</button>
    </section>
  );
}

export default Hero;
