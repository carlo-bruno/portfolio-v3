import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className='Contact' id='Contact'>
        <div className='container'>
          <h2>Contact</h2>

          <form
            className='contact-form'
            name='contact-form'
            method='POST'
            data-netlify='true'>
            <input
              className='contact-name'
              type='text'
              name='name'
              placeholder='Name'
            />
            <input
              className='contact-email'
              type='email'
              name='email'
              placeholder='Email'
            />
            <textarea
              className='contact-message'
              name='message'
              placeholder='Message'
            />
            <input
              className='contact-submit'
              type='submit'
              value='Send Message'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
