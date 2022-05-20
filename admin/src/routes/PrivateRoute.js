import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const token = user?.token;
  return token ? children : <Navigate to='/login' />;
};
