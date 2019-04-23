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
    return (
      <div
        className={`FeatureCard ${
          this.state.isFlipped ? 'flipped' : ''
        }`}
        onClick={this.flipCard}>
        <div className='whole-card'>
          <div className='card-front'>
            <img src={this.props.image} alt='card' />
          </div>
          <div className='card-back'>
            <h3>back</h3>
          </div>
        </div>
      </div>
    );
  }
}
