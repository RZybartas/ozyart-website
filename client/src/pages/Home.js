import { Helmet } from 'react-helmet-async';
import { LeftHome } from '../components/LeftHome';

export const Home = () => {
  return (
    <>
      <Helmet></Helmet>
      <section className='home'>
        <div className='home__circle'></div>

        <LeftHome />
      </section>
    </>
  );
};
