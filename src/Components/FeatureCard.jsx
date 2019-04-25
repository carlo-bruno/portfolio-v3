import React, { Component } from 'react';
import '../styles/FeatureCard.css';

import reactLogo from '../img/react.svg';
import nodeLogo from '../img/nodejs.svg';
import graphLogo from '../img/graphql.svg';
import mongoLogo from '../img/mongodb.svg';
import postgresLogo from '../img/postgresql.svg';
import exLogo from '../img/express.png';
import htmlLogo from '../img/html.svg';
import cssLogo from '../img/css.svg';
import jsLogo from '../img/js.svg';

export default class FeatureCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false,
    };
  }

  flipCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      isFlipped: !this.state.isFlipped,
    });
  };

  render() {
    let {
      title,
      description,
      tech,
      builtWith,
      github,
      live,
      image,
    } = this.props.project;

    builtWith = builtWith.join(', ');

    let logos = {
      react: reactLogo,
      node: nodeLogo,
      graphql: graphLogo,
      mongo: mongoLogo,
      postgres: postgresLogo,
      express: exLogo,
      html: htmlLogo,
      css: cssLogo,
      javascript: jsLogo,
    };

    let techLogos = tech.map(
      (t, i) => logos[t] && <img src={logos[t]} alt={`${t}-logo`} />
    );

    return (
      <div
        className={`FeatureCard ${
          this.state.isFlipped ? 'flipped' : ''
        }`}
        onClick={this.flipCard}>
        <div className='whole-card'>
          <div className='card-front'>
            <img src={image} alt='card' />
          </div>

          <div className='card-back'>
            <section className='tech-box'>{techLogos}</section>
            <section className='title-box'>
              <h4>{title}</h4>
              <p>{description}</p>
              <em>Built With: {builtWith}</em>
            </section>
            <section className='link-box'>
              <a href={github} onClick={(e) => e.stopPropagation()}>
                Github
              </a>
              <a href={live} onClick={(e) => e.stopPropagation()}>
                Live Demo
              </a>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
