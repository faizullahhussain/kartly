import { useContext } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useFavorite } from '../context/FavoriteContext';
import Breadcrumbs from './Breadcrumbs';
import ProductRating from './ProductRating';
import EmptyCard from './EmptyCard';
import { BiHeart } from 'react-icons/bi';

const FavoritesProduct = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  const { clearFavorites, favorites } = useFavorite();
  return (
    <section className='max-w-280 mx-auto my-10'>
      {favorites.length > 0 && (
        <>
          <div className='flex justify-between items-center'>
            <div>
              <Breadcrumbs
                items={[{ label: 'Home', to: '/' }, { label: 'Favorites' }]}
              />
            </div>
            <button
              onClick={clearFavorites}
              className='text-sm text-gray-500 cursor-pointer'
            >
              Clear all
            </button>
          </div>
          <h1 className='text-2xl font-bold mb-4'>
            My Favorites ({favorites.length})
          </h1>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4 '>
            {favorites.map((favProduct) => (
              <div
                key={favProduct.id}
                className='rounded-2xl border border-gray-200 bg-white p-3'
              >
                <div className='bg-[#e0e7ff] rounded-2xl mb-3'>
                  <img
                    className='h-50 w-full object-contain'
                    src={favProduct.thumbnail}
                    alt=''
                  />
                </div>
                <h3 className='text-sm font-semi-bold text-[#69707f]'>
                  {favProduct.category.toUpperCase()}
                </h3>
                <h1 className='font-bold'>{favProduct.title}</h1>
                <ProductRating rating={favProduct.rating} />
                <div className='flex justify-between items-center'>
                  <h3 className='text-xl font-bold text-primary'>
                    ${favProduct.price}
                  </h3>
                  <p className='text-sm text-[#09986c] font-bold'>
                    {favProduct.stock ? 'In Stock' : 'out of stock'}
                  </p>
                </div>

                <button
                  type='button'
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    dispatch({
                      type: 'add_to_cart',
                      payload: { ...favProduct, quantity: 1 },
                    });

                    navigate('/cart');
                  }}
                  className='bg-primary flex p-2 rounded-md text-white justify-center items-center gap-2 mt-4'
                >
                  <FaShoppingBasket />
                  <span className='font-semibold text-sm cursor-pointer'>
                    Add to cart
                  </span>
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      {favorites.length === 0 && (
        <EmptyCard
          cardTitle='Your wishlist is empty'
          cardDescription='You have not saved any favorites yet. Explore our products and add the items you love to your wishlist.'
          icon={BiHeart}
        />
      )}
    </section>
  );
};
export default FavoritesProduct;
