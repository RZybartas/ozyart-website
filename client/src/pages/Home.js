import { Helmet } from 'react-helmet-async';
import { LeftHome } from '../components/LeftHome';
import { RightHome } from '../components/RightHome';

const Home = () => {
  return (
    <>
      <Helmet title='Ozyart - Pagrindinis' />
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

export default Home;
