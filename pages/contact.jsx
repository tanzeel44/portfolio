/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import { useState } from 'react';
import Head from 'next/head';

import Button from '../components/Button';

const ContactMe = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: ${(props) => props.theme.fonts.main};

  & > h1 {
    text-align: center;
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-size: 2.25rem;
    @media only screen and (min-width: 768px) {
      font-size: 3rem;
    }
  }
`;

const Form = styled.form`
  font-family: inherit;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 2;

  .form-group {
    text-align: center;
    label {
      font-size: 1.333rem;
      font-weight: 700;
    }
  }

  .message-container {
    flex: 2;
    max-height: 360px;
  }

  textarea {
    resize: none;
    height: calc(100% - 3rem);
  }

  label {
    display: block;
    text-align: left;
  }

  input,
  textarea {
    width: 240px;
    background-color: #ddd;
    padding: 8px;
    font-size: 1.25rem;
    font-weight: 500;
    @media only screen and (min-width: 360px) {
      width: 320px;
    }

    @media only screen and (min-width: 480px) {
      width: 400px;
    }

    @media only screen and (min-width: 768px) {
      width: 600px;
    }
  }

  label, input, textarea {
    font-family: ${(props) => props.theme.fonts.main};
    border-radius: 3px;
    border: none;
    margin: 0.25rem;
  }

  button {
    font-weight: 700;
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

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      alert('Unable to Send Mail. Please Try Again.');
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ContactMe>
      <Head>
        <title>Contact Me</title>
      </Head>
      <h1>Get In Touch</h1>
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input value={name} onChange={(e) => handleChange(e, setName)} type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => handleChange(e, setEmail)} type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="form-group message-container">
          <label htmlFor="message">Message</label>
          <textarea value={message} onChange={(e) => handleChange(e, setMessage)} name="message" id="message" placeholder="Message" />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </ContactMe>
  );
}
