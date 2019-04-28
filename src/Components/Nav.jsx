import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import '../styles/Nav.css';

const Nav = (props) => {
  return (
    <div className='Nav'>
      <Link
        to='Hero'
        activeClass='active'
        spy={true}
        smooth={true}
        duration={600}>
        <div className='node'>
          <span>Home</span>
        </div>
      </Link>

      <Link
        to='About'
        activeClass='active'
        spy={true}
        smooth={true}
        duration={600}>
        <div className='node'>
          <span>About</span>
        </div>
      </Link>

      <Link
        to='Projects'
        activeClass='active'
        spy={true}
        smooth={true}
        duration={600}>
        <div className='node'>
          <span>Projects</span>
        </div>
      </Link>

      <Link
        to='Contact'
        activeClass='active'
        spy={true}
        smooth={true}
        duration={600}>
        <div className='node'>
          <span>Contact</span>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
