import { useContext } from 'react';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useFavorite } from '../context/FavoriteContext';
import ProductRating from './ProductRating';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  const { isFavorite, toggleFavorite } = useFavorite();

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    toggleFavorite(product);
  };

  return (
    <div className='rounded-2xl border border-gray-200 bg-white p-3'>
      <NavLink to={`/product/${product.id}`}>
        <div className='relative aspect-square overflow-hidden rounded-xl bg-gray-100'>
          <img
            src={product.thumbnail}
            alt={product.title}
            className='h-full w-full object-contain'
          />

          <button
            type='button'
            onClick={handleFavorite}
            className='absolute top-2 right-4 z-50 rounded-full bg-white p-2'
          >
            {isFavorite(product.id) ? (
              <BiSolidHeart
                size={20}
                className='text-indigo-600 cursor-pointer'
              />
            ) : (
              <BiHeart size={20} className='text-gray-500 cursor-pointer' />
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

      <div className='mt-2 flex flex-col items-center justify-between md:flex-row'>
        <span className='text-xl font-bold'>${product.price}</span>

        <button
          type='button'
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
