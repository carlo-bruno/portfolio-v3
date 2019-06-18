import React from 'react';
import '../styles/About.css';
import profile from '../img/profile.jpg';
import { Link } from 'react-scroll';

import * as logos from '../img/logos';

const About = () => {
  console.log(logos);
  let skills = [];
  let tech = [
    'React',
    'React Router',
    'GraphQL',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Sequelize',
    'Python',
    'Django',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Heroku',
    'Git',
    'Github',
    'Command Line',
    'VS Code',
  ];
  let i = 0;
  for (let logo in logos) {
    skills.push(
      <div key={i}>
        <img src={logos[logo]} alt={logo} />
        <p>{tech[i]}</p>
      </div>
    );
    i++;
  }

  return (
    <div className='About' id='About'>
      <div className='container'>
        <section className='text-box'>
          <h2>About Me</h2>
          <h3>
            I am a full-stack web developer with a penchant for
            remarkable front-end interface and challenging problems. I
            have a broad experience with various development
            technologies, and I am currently specializing in
            JavaScript, React and GraphQL.
          </h3>

          <p>
            Being a musician taught me teamwork, communication and
            discipline.
            <br />
            In writing poetry and songs, I yearned for chaotic
            creativity and structured elegance.
            <br />
            Working with various teams refined my empathy, strategy
            and problem-solving.
            <br />
            Learning programming on my own, I learned patience,
            perseverance and persistence.
            <br />
            And in the classroom, a thinker, leader and community
            builder.
          </p>
          <p>
            Curious to learn more about me?{' '}
            <Link
              to='Contact'
              spy={true}
              smooth={true}
              duration={800}>
              Feel free to reach out!
            </Link>
          </p>
        </section>
        <section className='profile-box'>
          <div className='image-box'>
            <img src={profile} alt='profile' />
          </div>
        </section>
        <section className='skills-box'>{skills}</section>
      </div>
    </div>
  );
};

export default About;
