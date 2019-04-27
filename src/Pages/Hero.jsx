import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='title-box'>
        <h1>Carlo Bruno</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      <div className='social-box'>
        <a href=''>LinkedIn</a>
        <a href=''>Github</a>
        <a href=''>Instagram</a>
        <a href=''>Twitter</a>
        <a href=''>freeCodeCamp</a>
        <a href=''>CodeWars</a>

        <a href=''>Resume</a>
      </div>
    </div>
  );
};

export default Hero;
