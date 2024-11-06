import React, { useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Feature from './components/Feature';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GoToTop from './components/GoToTop';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const featureRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Header
        heroRef={heroRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        featureRef={featureRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div ref={heroRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={featureRef}><Feature /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer />
      <GoToTop />
    </div>
  );
}

export default App;