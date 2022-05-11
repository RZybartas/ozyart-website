import {
  Close,
  MenuOutlined,
  HomeOutlined,
  CollectionsOutlined,
  InfoOutlined,
  ContactsOutlined,
} from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className='navbar'>
      <div className='menu-icon'>
        <MenuOutlined className='menu' onClick={showMenu} />
      </div>
      <nav className={active ? 'slider open' : 'slider'} onClick={showMenu}>
        <ul>
          <div className='closed'>
            <Close className='close' />
          </div>
          <li>
            <Link to='/'>
              <HomeOutlined className='navbar__icons' />
              Pagrindinis
            </Link>
          </li>
          <li>
            <Link to='/products'>
              <CollectionsOutlined className='navbar__icons' /> Galerija
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <InfoOutlined className='navbar__icons' /> Apie Mane
            </Link>
          </li>
          <li>
            <Link to='/contacts'>
              <ContactsOutlined className='navbar__icons' /> Kontaktai
            </Link>
          </li>
          <div className='navbar__social-container'>
            <h3>Sekite mane</h3>
            <a href='https://www.instagram.com/oksefokse/'>
              <InstagramIcon />
            </a>

            <a href='https://m.facebook.com/OZyart-103928717763605/'>
              <FacebookIcon />
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
};
