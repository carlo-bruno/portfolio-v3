import React from 'react';
import '../styles/Projects.css';
import FeatureCard from '../Components/FeatureCard';

import highnote from '../img/1.png';
import citizenly from '../img/2.png';
import pluma from '../img/3.png';
import tetris from '../img/4.png';

const Projects = (props) => {
  return (
    <div className='Projects'>
      <div className='container'>
        <h2>Projects</h2>
        <section className='cards'>
          {/* Project Cards */}
          <FeatureCard image={highnote} />
          <FeatureCard image={citizenly} />
          <FeatureCard image={pluma} />
          <FeatureCard image={tetris} />
        </section>
      </div>
    </div>
  );
};

export default Projects;
