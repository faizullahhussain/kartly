import { BiCart, BiHeart, BiHome, BiStoreAlt } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const links = [
  { name: 'Home', href: '/', icon: BiHome },
  { name: 'Shop', href: '/shop', icon: BiStoreAlt },
  { name: 'Favorite', href: '/favorite', icon: BiHeart },
  { name: 'Cart', href: '/cart', icon: BiCart },
];

const navStyle = ({ isActive }) =>
  `relative flex flex-col justify-center items-center transition-colors ${isActive ? 'before:absolute before:-top-4 before:h-1 before:w-12 before:rounded-full before:bg-primary text-primary' : 'text-secondary'}`;

const BottomNav = () => {
  const { count } = useContext(CartContext);
  return (
    <nav className='fixed bottom-0 left-0 right-0 flex justify-around items-center gap-4 md:hidden bg-white border-t border-border-dark p-4 z-100 shadow-lg'>
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <NavLink key={link.name} to={link.href} className={navStyle}>
            <div className='relative'>
              <Icon size={28} />
              {link.href === '/cart' && count > 0 && (
                <span className='absolute -top-2 -right-2 rounded-full bg-primary text-white text-sm w-5 h-5 flex justify-center items-center'>
                  {count}
                </span>
              )}
            </div>
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default BottomNav;
