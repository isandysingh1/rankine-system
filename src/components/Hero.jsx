import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src="/videos/herosection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
      <h1><b>Your Trusted HVAC Partner</b></h1>
      <br />
      <h5>
        Rankine Systems, authorized channel partners of Daikin Air Conditioning,<br />brings premium HVAC solutions to residential and commercial clients.
      </h5>
      <br />
      <Link to="/services" className="btn btn-primary mt-4">Learn More</Link>
      </div>
    </section>
  );
};

export default Hero;