import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Breadcrumbs from '../components/Breadcrumbs';

const Cart = () => {
  const { state, count } = useContext(CartContext);

  return (
    <section className='max-w-300 mx-auto'>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Cart' }]} />
      <h1 className='text-2xl font-bold mb-4'>Shopping Cart ({count})</h1>
      {state.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </section>
  );
};

export default Cart;
