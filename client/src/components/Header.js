import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='https://res.cloudinary.com/dl8kybvwx/image/upload/v1651598058/kzxevp8wfnxcjfie4vs5.svg'
          alt='ozyart-logo'
        />
      </Link>
      <Navbar />
    </div>
  );
};
