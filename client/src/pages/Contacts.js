import { Helmet } from 'react-helmet-async';

const Contacts = () => {
  return (
    <>
      <Helmet title='Ozyart - Kontaktai' />
      <div className='contacts'>
        <h1 className='contacts__title'>Kontaktai</h1>
        <p>
          <strong>Telefonas:</strong>
          <a href='tel:+37061206151'>+37061206151</a>
        </p>
        <p>
          <strong>El. paštas: </strong> okse77@gmail.com
        </p>
      </div>
    </>
  );
};

export default Contacts;
