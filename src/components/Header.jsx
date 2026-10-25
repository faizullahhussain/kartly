import { useContext, useState } from 'react';
import { BiCart, BiHeart, BiSearch, BiUser } from 'react-icons/bi';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Cart', href: '/cart' },
];

const navClass = ({ isActive }) =>
  `text-[0.9rem] font-semibold transition-colos ${
    isActive
      ? 'text-primary underline underline-offset-4'
      : 'text-secondary  hover:text-primary'
  }`;

const Header = () => {
  const { count } = useContext(CartContext);
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className='border border-border-dark py-2 px-4 md:py-4'>
      <nav className='flex justify-between items-center mx-auto max-w-300'>
        <a href='#' className='flex items-center text-primary'>
          <BiCart className='font-bold text-3xl' />
          <span className='font-bold text-[1rem] md:text-2xl'>Kartley</span>
        </a>

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
          <form className='flex items-center p-1 rounded-full bg-[#f3f4f6] px-3'>
            <BiSearch />
            <input
              type='text'
              placeholder='Search products'
              className='outline-none'
            />
          </form>
          <ul className='flex gap-6'>
            <li>
              <BiHeart />
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
          {links.map((linke) => (
            <li key={linke.name}>
              <a
                href={linke.href}
                onClick={() => setOpenNav(false)}
                className='block rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-black'
              >
                {linke.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
