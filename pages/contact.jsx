/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import { useState } from 'react';

const ContactMe = styled.div`
  height: 100%;
  width: 100%;
  font: ${(props) => props.theme.fonts.main}
  border: 2px solid blueviolet;
`;

const Form = styled.form`
  text-align: center;

  label {
    display: block;
  }

  label, input, textarea {
    font-family: ${(props) => props.theme.fonts.main};
  }
`;

export default function contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event, callback) => {
    callback(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <ContactMe>
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input value={name} onChange={(e) => handleChange(e, setName)} type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => handleChange(e, setEmail)} type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea value={message} onChange={(e) => handleChange(e, setMessage)} name="message" id="message" placeholder="Message" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </ContactMe>
  );
}
