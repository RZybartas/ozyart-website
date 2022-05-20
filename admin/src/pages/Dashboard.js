import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import { Sidebar } from '../components/Sidebar';
import { Widget } from '../components/Widget';
import { getProducts } from '../features/products/productsSlice';
import { getAllUsers } from '../features/users/usersSlice';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const { products, totalProducts } = useSelector((state) => state.products);
  const token = user?.token;
  console.log(totalProducts);

  useEffect(() => {
    dispatch(getAllUsers(token));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className='dashboard'>
      <div>
        <Sidebar className='dashboard__sidebar' />
      </div>
      <section className='dashboard__wrapper'>
        <h1 className='dashboard__title'>Dashboard</h1>
        <div className='dashboard__container'>
          <Widget
            key={3}
            name='users'
            count={users ? users.length : "You don't have permission"}
            links={'/users'}
            icons={<PersonIcon className='dashboard__icon' />}
          />
          <Widget
            key={4}
            name='products'
            count={products ? totalProducts : 'No products'}
            links={'/products'}
            icons={<StoreIcon className='dashboard__icon' />}
          />
          <Widget
            key={1}
            name='orders'
            count={0}
            links={'/orders'}
            icons={<CreditCardIcon className='dashboard__icon' />}
          />
          <Widget
            key={2}
            name='delivery'
            count={0}
            links={'/delivery'}
            icons={<LocalShippingIcon className='dashboard__icon' />}
          />
        </div>
      </section>
    </div>
  );
};
