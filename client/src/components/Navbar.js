import { Close, MenuOutlined } from '@mui/icons-material';
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
      <nav className={active ? 'slider open' : 'slider'}>
        <ul onClick={showMenu}>
          <div className='closed'>
            <Close className='close' />
          </div>
          <li>
            <Link to='/'>Pagrindinis</Link>
          </li>
          <li>
            <Link to='/products'>Galerija</Link>
          </li>
          <li>
            <Link to='/about'>Apie Mane</Link>
          </li>
          <li>
            <Link to='/contacts'>Kontaktai</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
