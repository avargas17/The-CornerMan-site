import React from 'react';
import backgroundImage from '../images/ONEFN11.jpg';
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