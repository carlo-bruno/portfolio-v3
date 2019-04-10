import React from 'react';
import '../styles/About.css';
import profile from '../img/profile.jpg';

const About = () => {
  return (
    <div className='About'>
      <div className='container'>
        <section className='text-box'>
          <h2>About Me</h2>
          <p>
            I am a Full-stack Web Developer specializing in
            Javascript, React and the MERN Stack. Curious,
            passionate, and driven to excel. I am hungry for
            knowledge and dedicated to mastery of my skills and
            tools.
          </p>
        </section>
        <section className='profile-box'>
          <div className='image-box'>
            <img src={profile} alt='profile' />
          </div>
        </section>
        <section className='skills-box'>
          {/* Skills */}
          <p>Skills</p>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
          <span>React</span>
        </section>
      </div>
    </div>
  );
};

export default About;
