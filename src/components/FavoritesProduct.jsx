import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Breadcrumbs from './Breadcrumbs';

const FavoritesProduct = () => {
  const { state, count } = useContext(CartContext);
  return (
    <section className='max-w-300 mx-auto'>
      <Breadcrumbs
        items={[{ label: 'Home', to: '/' }, { label: 'Favorites' }]}
      />
      <h1 className='text-2xl font-bold mb-4'>My Favorites ({count})</h1>
    </section>
  );
};
export default FavoritesProduct;
