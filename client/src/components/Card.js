import { Link } from 'react-router-dom';

export const Card = ({ product }) => {
  return (
    <div className='card'>
      <div className='card__image'>
        <img src={product.image_url} alt={product.title} />
        {product.new === true ? <p className='blink'>NEW</p> : null}
      </div>
      <div>
        <Link to={`/products/${product._id}`} className='footer__title'>
          {product.title}
        </Link>
      </div>
    </div>
  );
};
