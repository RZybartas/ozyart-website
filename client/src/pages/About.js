import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet title='Ozyart - Apie mane' />
      <div className='about'>
        <h1 className='about__title'>Apie Mane</h1>
        <div className='about__container'>
          <section className='about__left'>
            <img
              src='https://res.cloudinary.com/dl8kybvwx/image/upload/v1652172783/wz7mmu1amnewnoziu6se.jpg'
              alt='about-1'
            />

            <p>
              Tapyba ir kūryba niekada nebuvo svetimas dalykas man augant,
              besisukinejant aplink tečio darbus, dažus ir molbertą, žavėjausi
              menu ir spalvomis, deja, kažkur gyvenime pametusi šį susižavėjimą,
              nebeturėjau ryžto ir vėl pabandyti. Tik prieš dvejus metus vėl
              prisilietusi prie drobės iš naujo pamilau tapyti, dėka nuostabaus
              žmogaus Lena Kauffeld kuri manyje pažadino tą jauną mergaitę,
              norinčią kurti ir nuspalvoti pasaulį.
            </p>
            <img
              className='img-2'
              src='https://res.cloudinary.com/dl8kybvwx/image/upload/v1652172774/cwt5cmkikifggdbhzuk8.jpg'
              alt='about-2'
            />
          </section>
          <section className='about__right'>
            <p>
              Tapyba nėra man darbas,tai mano hobis, mano atsipalaidavimas. Kai
              pradedu tapyti dingsta visas mano tikrasis pasaulis ir lieka tik
              drobės ir akrilas. Kiekviename savo paveiksle aš įdedu dalelę
              savęs, kiekvienas mano kūrinys vienintelis ir priklausantis nuo
              mano tuo metu esančios nuotaikos.
            </p>
            <img
              src='https://res.cloudinary.com/dl8kybvwx/image/upload/v1655885490/ukxcyz4clxaowsx9lfel.jpg'
              alt='about-3'
            />
            <p>
              Visiems savo paveikslams esant galimybei ir jūsų norui suteikiu
              paveikslo "pasimatavimo" galimybę, norisi kad paveikslas džiugintu
              jus kasdien. Dabar kiekviename interjere norisi paveikslo, todėl
              pasižvalgykite gal ką rasite patinkančio ir savo namams. O neradus
              visada galite sekti mane socialiniuose tinkluose ir pamatyti
              naujienas iškarto.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
