import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

const Contacts = () => {
  const form = useRef({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          result.text === 'OK'
            ? alert('Žinutė išsiųsta!')
            : alert('Klaida siunčiant žinutę!');
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <>
      <Helmet title='Ozyart - Kontaktai' />
      <div className='contacts'>
        <h1 className='contacts__title'>Iškilo klausimų ?</h1>
        <p>
          <strong>Paskambinkit </strong>
          <a href='tel:+37061206151'>+37061206151</a>
        </p>
        <p>
          <strong>Parašykit </strong>
        </p>

        <form className='form' ref={form} onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Vardas' />
          <input type='email' name='email' placeholder='Elektroninis paštas' />
          <input type='text' name='subject' placeholder='Tema' />
          <textarea name='message' placeholder='Žinutė' />
          <input type='submit' value='Siųsti' />
        </form>
      </div>
    </>
  );
};

export default Contacts;
