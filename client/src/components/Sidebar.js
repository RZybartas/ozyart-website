import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
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
    </div>
  );
};
