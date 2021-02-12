import React from 'react';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
