import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please add all fields');
      return;
    } else {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
      setFormData({ email: '', password: '' });
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error('Incorrect email or password');
      return;
    }
    if (isLoading) {
      return;
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset);
  }, [user, isLoading, isSuccess, isError, message, navigate, dispatch]);

  return (
    <div className='auth'>
      <h1 className='auth__title'>Login</h1>
      <ToastContainer />
      <form className='auth__form' onSubmit={handleSubmit}>
        <input
          className='auth__input'
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />

        <input
          className='auth__input'
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
        />

        <button className='auth__btn'>Login</button>

        <Link to='/register' className='auth__link'>
          Create new account
        </Link>
      </form>
    </div>
  );
};
