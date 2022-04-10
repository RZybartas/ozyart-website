import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__wrapper'>
        <nav className='sidebar__menu'>
          <ul className='sidebar__list'>
            <p className='sidebar__title'>MAIN</p>
            <li className='sidebar__list-item'>
              <Link to='/'>
                <DashboardIcon className='icons' />
                Dashboard
              </Link>
            </li>
            <p className='sidebar__title'>LISTS</p>
            <li className='sidebar__list-item'>
              <Link to='/users'>
                <PersonIcon className='icons' />
                Users
              </Link>
            </li>
            <li className='sidebar__list-item'>
              <Link to='/products'>
                <StoreIcon className='icons' />
                Products
              </Link>
            </li>
            <li className='sidebar__list-item'>
              <Link to='/orders'>
                <CreditCardIcon className='icons' />
                Orders
              </Link>
            </li>
            <li className='sidebar__list-item'>
              <Link to='/delivery'>
                <LocalShippingIcon className='icons' />
                Delivery
              </Link>
            </li>
            <p className='sidebar__title'>USER</p>
            <li className='sidebar__list-item'>
              <Link to='/profile'>
                <AccountCircleOutlinedIcon className='icons' />
                Profile
              </Link>
            </li>
            <button className='sidebar__button'>
              <ExitToAppIcon className='icons' />
              Logout
            </button>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
