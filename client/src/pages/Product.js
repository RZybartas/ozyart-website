import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../features/productsSlice';

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { product } = useSelector((state) => state.products);

  const { _id, title, image_url, size, description } = product;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className='product' key={_id}>
        <h3 className='product__title'>{title}</h3>
        <div className='product__content'>
          <img src={image_url} alt={title} />
          <div className='product__info'>
            <h3 className='product__size'>{size}</h3>
            <h3 className='product__description'>{description}</h3>
            <button onClick={() => navigate(-1)}>Atgal</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
