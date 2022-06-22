import { useSelector } from 'react-redux';

import { Card } from '../components/Card';
import { Spinner } from '../components/Spinner';
import { AppPagination } from '../components/AppPagination';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Products = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1');
  const { products, isLoading } = useSelector((state) => state.products);

  return (
    <>
      <Helmet>
        <title>Ozyart - Galerija</title>
      </Helmet>
      <div className='products'>
        <div className='products__title'>Paveikslų galerija</div>
        <div className='products__container'>
          {isLoading ? (
            <>
              <Spinner />
            </>
          ) : (
            products.map((product) => (
              <Card key={product._id} product={product} />
            ))
          )}
        </div>
        <AppPagination page={page} />
      </div>
    </>
  );
};

export default Products;
