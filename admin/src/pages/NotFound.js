import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='not-found-container'>
      <div className='not-found-btn'>
        <button onClick={() => navigate(-1)}>back</button>
      </div>
      <h1 className='not-found-title'>Page not found</h1>
    </div>
  );
};
