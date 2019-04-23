import React, { Component } from 'react';
import '../styles/FeatureCard.css';

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
      github,
      live,
      image,
    } = this.props.project;

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
            <section className='tech-box'>
              {
                // tech here
              }
            </section>
            <section className='title-box'>
              <h3>{title}</h3>
              <p>{description}</p>
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
