import { useContext, useState, useEffect } from 'react';
import {
  BiCart,
  BiHeart,
  BiSearch,
  BiUser,
  BiSolidHeart,
} from 'react-icons/bi';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useFavorite } from '../context/FavoriteContext';
import BottomNav from './BottomNav';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Cart', href: '/cart' },
];

const navClass = ({ isActive }) =>
  `text-[0.9rem] font-semibold transition-colors ${
    isActive
      ? 'text-primary underline underline-offset-4'
      : 'text-secondary hover:text-primary'
  }`;

const Header = () => {
  const { favorites } = useFavorite();
  const { count } = useContext(CartContext);
  const [openNav, setOpenNav] = useState(false);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [searchProduct, setSearchProduct] = useState('');

  const query = searchProduct.trim().toLowerCase();
  const filteredProduct = product.filter((item) =>
    item.title.toLowerCase().includes(query),
  );

  const hasFavorite = favorites.length > 0;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=0');
        if (!response.ok) {
          throw new Error('Products are not loaded');
        }
        const data = await response.json();
        setProduct(data.products);
      } catch (error) {
        setError(error.message);
      }
    };
    loadProducts();
  }, []);

  return (
    <>
      <header className='hidden md:block relative border border-border-dark py-2 px-4 md:py-4 bg-white'>
        <nav className='flex justify-between items-center mx-auto max-w-280'>
          <Link to='/' className='flex items-center text-primary'>
            <BiCart className='font-bold text-3xl' />
            <span className='font-bold text-[1rem] md:text-2xl'>Kartly</span>
          </Link>

          <ul className='hidden md:flex gap-6'>
            {links.map((link) => (
              <li key={link.name}>
                <NavLink to={link.href} className={navClass}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpenNav(!openNav)}
            aria-label='Toggle Menu'
            aria-expanded={openNav}
            className='md:hidden'
          >
            {openNav ? (
              <FiX size={22} strokeWidth={2.3} />
            ) : (
              <FiMenu size={22} strokeWidth={2.3} />
            )}
          </button>

          <div className='hidden md:flex md:justify-center md:items-center gap-4'>
            <div className='relative'>
              <form
                onSubmit={(e) => e.preventDefault()}
                className='flex items-center gap-1 p-1 rounded-full bg-[#f3f4f6] px-3'
              >
                <BiSearch className='text-gray-500' />
                <input
                  type='text'
                  placeholder='Search products...'
                  aria-label='Search products'
                  className='outline-none text-gray-500 text-sm'
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                />
              </form>

              {query.length > 0 && (
                <ul className='absolute top-10 z-50 p-3 border border-border-dark bg-white rounded-md max-w-125'>
                  {error ? (
                    <li className='text-sm text-red-600'>{error}</li>
                  ) : filteredProduct.length > 0 ? (
                    filteredProduct.slice(0, 5).map((pro) => (
                      <li key={pro.id}>
                        <Link
                          to={`/product/${pro.id}`}
                          className='flex justify-between gap-4'
                          onClick={() => setSearchProduct('')}
                        >
                          <div className='flex gap-2'>
                            <img
                              className='w-10 h-10 object-contain bg-[#e0e7ff] rounded-md mb-3'
                              src={pro.thumbnail}
                              alt={pro.title}
                            />
                            <span className='text-sm text-gray-500'>
                              {pro.title}
                            </span>
                          </div>
                          <strong>
                            <span className='text-sm text-gray-500'>
                              ${pro.price}
                            </span>
                          </strong>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className='text-sm text-gray-500'>No products found</li>
                  )}
                </ul>
              )}
            </div>

            <ul className='flex gap-6'>
              <li>
                <Link to='/favorite'>
                  {hasFavorite ? (
                    <BiSolidHeart className='text-primary' />
                  ) : (
                    <BiHeart className='text-black' />
                  )}
                </Link>
              </li>
              <li>
                <BiUser />
              </li>
              <li>
                <Link to='/cart' className='relative inline-flex'>
                  <BiCart size={19} />

                  <span className='absolute -top-2 -right-2 min-w-3 min-h-3 flex items-center justify-center rounded-full bg-[#f59e0b] px-1 text-xs text-white'>
                    {count}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {openNav && (
          <ul className='absolute left-0 top-12 z-50 flex w-full flex-col gap-2 bg-white px-6 py-6 shadow-lg md:hidden'>
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  onClick={() => setOpenNav(false)}
                  className='block rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-black'
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </header>
      <BottomNav />
    </>
  );
};

export default Header;
