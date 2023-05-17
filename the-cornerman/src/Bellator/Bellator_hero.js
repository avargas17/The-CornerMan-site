import React from 'react';
import backgroundImage from '../images/bellator-297.jpg';
import '../components/HeroSection.css';

function Hero() {
  const heroStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
  };

  return (
    <section className="hero" style={heroStyle}>
    </section>
  );
}

export default Hero;
