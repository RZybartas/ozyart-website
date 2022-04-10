import { useSelector } from 'react-redux';

export const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className='navbar'>
      <div className='navbar__wrapper'>
        <div className='navbar__left'>
          <h1 className='navbar__logo'>Ozyart Admin</h1>
        </div>
        <div className='navbar__right'>
          <p className='navbar__avatar'>
            {user ? `Welcome ${user.username}` : null}
          </p>
        </div>
      </div>
    </nav>
  );
};
