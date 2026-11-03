import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ProductRating from './ProductRating';
import { NavLink } from 'react-router-dom';
import { BiHeart } from 'react-icons/bi';
import { BiSolidHeart } from 'react-icons/bi';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite((prevFav) => !prevFav);
  };
  return (
    <div className='rounded-2xl border border-gray-200 bg-white p-3'>
      <NavLink to={`/product/${product.id}`}>
        <div className='aspect-square overflow-hidden rounded-xl bg-gray-100 relative'>
          <img
            src={product.thumbnail}
            alt={product.title}
            className='h-full w-full object-contain'
          />
          <button
            onClick={handleFavorite}
            className='absolute top-2 right-4 z-50 rounded-full bg-white p-2'
          >
            {isFavorite ? (
              <BiSolidHeart size={20} className='text-indigo-600' />
            ) : (
              <BiHeart size={20} className='text-gray-500' />
            )}
          </button>
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
