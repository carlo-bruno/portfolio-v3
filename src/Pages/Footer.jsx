import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='container'>
        <h2>Find Me Online</h2>
        <div className='footer-links'>
          <p>email</p>
          <p>linkedin</p>
          <p>github</p>
          <p>twitter</p>
          <p>instagram</p>
          <p>codewars</p>
        </div>
      </div>
      <footer>
        <p>&copy;2019 Carlo Bruno</p>
      </footer>
    </div>
  );
};

export default Footer;
