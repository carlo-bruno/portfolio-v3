import React from 'react';
import '../styles/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as Codewars } from '../img/codewars.svg';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='container'>
        <h2>Find Me Online</h2>
        <div className='footer-links'>
          <a href='mailto:carlofbruno@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} size='6x' />
            <span>Email</span>
          </a>
          <a href='https://www.linkedin.com/in/carlofbruno/'>
            <FontAwesomeIcon icon={faLinkedin} size='6x' />
            <span>LinkedIn</span>
          </a>
          <a href='https://github.com/carlo-bruno'>
            <FontAwesomeIcon icon={faGithub} size='6x' />
            <span>GitHub</span>
          </a>
          <a href='https://twitter.com/carlobruno_11'>
            <FontAwesomeIcon icon={faTwitter} size='6x' />
            <span>Twitter</span>
          </a>
          <a href='https://www.instagram.com/carlobruno_11/'>
            <FontAwesomeIcon icon={faInstagram} size='6x' />
            <span>Instagram</span>
          </a>
          <a href='https://www.codewars.com/users/carlo-bruno'>
            <Codewars />
            <span>CodeWars</span>
          </a>
        </div>
      </div>
      <footer>
        <p>&copy;2019 Carlo Bruno</p>
      </footer>
    </div>
  );
};

export default Footer;
