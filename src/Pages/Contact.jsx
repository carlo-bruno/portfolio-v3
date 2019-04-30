import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  encode = (data) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) +
          '=' +
          encodeURIComponent(data[key])
      )
      .join('&');
  };

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: this.encode({ 'form-name': 'contact', ...this.state }),
    })
      .then((res) => {
        alert('Success!');
        console.log(res);
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className='Contact' id='Contact'>
        <div className='container'>
          <h2>Contact</h2>

          <form className='contact-form' onSubmit={this.handleSubmit}>
            <input
              className='contact-name'
              type='text'
              name='name'
              value={name}
              placeholder='Name'
              onChange={this.handleChange}
            />
            <input
              className='contact-email'
              type='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
            <textarea
              className='contact-message'
              name='message'
              value={message}
              placeholder='Message'
              onChange={this.handleChange}
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
