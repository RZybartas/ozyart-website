import { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Spinner } from './components/Spinner';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Product = lazy(() => import('./pages/Product'));
const About = lazy(() => import('./pages/About'));
const Contacts = lazy(() => import('./pages/Contacts'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <Sidebar />
      <Header />
      <Routes>
        <Route
          element={
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          }
          path='/'
        />
        <Route
          path='/products'
          element={
            <Suspense fallback={<Spinner />}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path='/products/:id'
          element={
            <Suspense fallback={<Spinner />}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path='/about'
          element={
            <Suspense fallback={<Spinner />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path='/contacts'
          element={
            <Suspense fallback={<Spinner />}>
              <Contacts />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
