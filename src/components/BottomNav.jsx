import { useContext } from 'react';
import {
  BiCart,
  BiHeart,
  BiHome,
  BiStoreAlt,
  BiSolidHeart,
} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../context/CartContext';
import { useFavorite } from '../context/FavoriteContext';

const links = [
  { name: 'Home', href: '/', icon: BiHome },
  { name: 'Shop', href: '/shop', icon: BiStoreAlt },
  { name: 'Favorite', href: '/favorite', icon: BiHeart },
  { name: 'Cart', href: '/cart', icon: BiCart },
];

const navStyle = (isActive, isFavorite) =>
  `flex flex-col justify-center items-center gap-1 transition-colors ${
    isActive || isFavorite ? ' text-primary' : 'text-secondary'
  }`;

const BottomNav = () => {
  const { count } = useContext(CartContext);
  const { favorites } = useFavorite();

  return (
    <nav className='fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around gap-4 border-t border-border-dark bg-white p-4 shadow-lg md:hidden'>
      {links.map((link) => {
        const isFavorite = link.href === '/favorite' && favorites.length > 0;

        return (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) => navStyle(isActive, isFavorite)}
          >
            {({ isActive }) => {
              const Icon =
                link.href === '/favorite' && isFavorite
                  ? BiSolidHeart
                  : link.icon;

              return (
                <>
                  <div className='relative'>
                    <Icon size={18} />

                    {link.href === '/cart' && count > 0 && (
                      <span className='absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[0.5rem] text-white'>
                        {count > 99 ? '99+' : count}
                      </span>
                    )}
                  </div>

                  <span
                    className={`text-[0.8rem] ${
                      isActive || isFavorite ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    {link.name}
                  </span>
                </>
              );
            }}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default BottomNav;
