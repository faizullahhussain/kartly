import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ProductRating from './ProductRating';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  return (
    <div className='rounded-2xl border border-gray-200 bg-white p-3'>
      <NavLink to={`/product/${product.id}`}>
        <div className='aspect-square overflow-hidden rounded-xl bg-gray-100'>
          <img
            src={product.thumbnail}
            alt={product.title}
            className='h-full w-full object-contain'
          />
        </div>
        <h3 className='mt-3 truncate font-bold text-secondary'>
          {product.title}
        </h3>
      </NavLink>
      <div className='mt-1 text-sm text-gray-600'>
        <ProductRating rating={product.rating} />
      </div>
      <div className='mt-2 flex flex-col md:flex-row items-center justify-between'>
        <span className='text-xl font-bold'>${product.price}</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch({
              type: 'add_to_cart',
              payload: { ...product, quantity: 1 },
            });
            navigate('/cart');
          }}
          className='cursor-pointer rounded-lg bg-secondary px-3 py-2 text-sm font-semibold text-white hover:opacity-90'
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
