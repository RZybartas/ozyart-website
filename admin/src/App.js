import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Products } from './pages/Products';
import { Register } from './pages/Register';
import { Users } from './pages/Users';
import { PrivateRoute } from './routes/PrivateRoute';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path='/users'
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path='/products'
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
