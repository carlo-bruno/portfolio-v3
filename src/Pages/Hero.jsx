import React from 'react';
import '../styles/Hero.css';

import Resume from '../data/Carlo-Bruno-Resume.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faGithubAlt,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../img/personal-logo.png';

const Hero = () => {
  return (
    <div className='Hero' id='Hero'>
      <img className='hero-logo' src={logo} alt='logo' />
      <div className='title-box'>
        <h1>Carlo Bruno</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      <div className='social-box'>
        <a href='https://www.linkedin.com/in/carlofbruno/'>
          <FontAwesomeIcon icon={faLinkedinIn} size='lg' />
          <span>LinkedIn</span>
        </a>
        <a href='https://github.com/carlo-bruno'>
          <FontAwesomeIcon icon={faGithubAlt} size='lg' />
          <span>Github</span>
        </a>
        <a href='https://twitter.com/carlobruno_11'>
          <FontAwesomeIcon icon={faTwitter} size='lg' />
          <span>Twitter</span>
        </a>
        <a href='mailto:carlofbruno@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} size='lg' />
          <span>Email</span>
        </a>

        <a href={Resume}>
          <FontAwesomeIcon icon={faFileAlt} size='lg' />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
