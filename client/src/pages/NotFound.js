import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet title='Ozyart - Puslapis nerastas' />
      <div className='not-found-container'>
        <div className='not-found-btn'>
          <button onClick={() => navigate(-1)}>back</button>
        </div>
        <h1 className='not-found-title'>Page not found</h1>
        <p className='not-found-paragraph'>404</p>
      </div>
    </>
  );
};

export default NotFound;
