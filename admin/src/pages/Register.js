import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { register, reset } from '../features/auth/authSlice';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const { username, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error(
        'Password should be at least 8 characters and match each other !'
      );
      return;
    } else if (password !== password2) {
      toast.error('Passwords do not match');
      return;
    } else {
    }
    const userData = {
      username,
      email,
      password,
    };
    dispatch(register(userData));
    setFormData({ username: '', email: '', password: '', password2: '' });
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
      return;
    }

    if (isLoading) {
      toast.error('User already exist');
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset);
  }, [user, isLoading, isSuccess, isError, message, navigate, dispatch]);

  return (
    <div className='auth'>
      <h1 className='auth__title'>Register</h1>
      <ToastContainer />
      <form className='auth__form' onSubmit={handleSubmit}>
        <input
          className='auth__input'
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={onChange}
          autoComplete='off'
        />

        <input
          className='auth__input'
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
          autoComplete='off'
        />

        <input
          className='auth__input'
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
        />

        <input
          className='auth__input'
          type='password'
          name='password2'
          placeholder='Repeat password'
          value={password2}
          onChange={onChange}
        />

        <button className='auth__btn'>Register</button>

        <Link to='/login' className='auth__link'>
          Already registered ?
        </Link>
      </form>
    </div>
  );
};
