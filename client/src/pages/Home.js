import { Helmet } from 'react-helmet-async';
import { LeftHome } from '../components/LeftHome';
import { RightHome } from '../components/RightHome';

export const Home = () => {
  return (
    <>
      <Helmet></Helmet>
      <div className='home-title'>
        <h1>
          Modernūs paveikslai<span>jūsų namams</span>
        </h1>
      </div>
      <section className='home'>
        <div className='home__circle'></div>
        <LeftHome />
        <RightHome />
      </section>
    </>
  );
};
