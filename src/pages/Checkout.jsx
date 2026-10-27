import { FaCheck } from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumbs';
import CheckoutForm from '../components/CheckoutForm';
import OrderSummary from '../components/OrderSummary';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { state } = useContext(CartContext);

  const totalPrice = state.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <section className='max-w-300 mx-auto mb-4 bg-light'>
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Cart', to: '/cart' },
          { label: 'Checkout' },
        ]}
      />
      <h1 className='text-2xl font-bold mb-4'>Checkout</h1>
      <div className='grid grid-cols-1 items-start md:grid-cols-[1fr_minmax(0,250px)] gap-8 pb-10'>
        <div className='border border-border-dark rounded-md p-4 bg-white shadow-sm'>
          <h2 className='font-bold text-[0.8rem] mb-2'>Shipping Details</h2>
          <CheckoutForm />
        </div>
        <div className='border border-border-dark rounded-md p-4 bg-white shadow-sm'>
          <OrderSummary
            totalPrice={totalPrice}
            buttonText='Place order'
            icon={<FaCheck />}
          />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
