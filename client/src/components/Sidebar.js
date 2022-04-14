import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Sidebar = () => {
  return (
    // navigation in app
    <nav className='nav-container'>
      <ul className='ul'>
        <li className='ul__li'>
          <Link to='/'>
            <div className='circle'>
              <p>P</p>
            </div>
          </Link>
        </li>
        <li className='ul__li'>
          <Link to='/products'>
            <div className='circle'>
              <p>G</p>
            </div>
          </Link>
        </li>
        <li className='ul__li'>
          <Link to='/about'>
            <div className='circle'>
              <p>A</p>
            </div>
          </Link>
        </li>
        <li className='ul__li'>
          <Link to='/contacts'>
            <div className='circle'>
              <p>K</p>
            </div>
          </Link>
        </li>
        {/* Social media icons */}
        <div className='social-container'>
          <li className='ul__li'>
            <a href='https://www.instagram.com/oksefokse/'>
              <InstagramIcon />
            </a>
          </li>
          <li className='ul__li'>
            <a href='https://m.facebook.com/OZyart-103928717763605/'>
              <FacebookIcon />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};
