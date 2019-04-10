import React, { Component } from 'react';
import './App.css';

import Hero from './Pages/Hero';
import About from './Pages/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero/>
        <About/>
      </div>
    );
  }
}

export default App;
