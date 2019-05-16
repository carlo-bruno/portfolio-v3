import React, { Component } from 'react';
import './App.css';

import Hero from './Pages/Hero';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Nav from './Components/Nav';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <main className='main'>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>

        <Nav />
      </div>
    );
  }
}

export default App;
