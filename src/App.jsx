import React, { Component } from 'react';
import './App.css';

import Hero from './Pages/Hero';
import About from './Pages/About';
import Projects from './Pages/Projects';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Hero />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
