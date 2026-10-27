import { FaCheck } from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumbs';
import CheckoutForm from '../components/CheckoutForm';
import OrderSummary from '../components/OrderSummary';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ModalCheckout from '../components/ModalCheckout';

const Checkout = () => {
  const { state } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormdata] = useState({});

  const totalPrice = state.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const handleSubmit = (formData) => {
    const values = Object.fromEntries(formData.entries());
    setFormdata(values);
    setIsOpen(true);
  };

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
          <CheckoutForm handleSubmit={handleSubmit} />
        </div>
        <div className='border border-border-dark rounded-md p-4 bg-white shadow-sm'>
          <OrderSummary
            totalPrice={totalPrice}
            mode='checkout'
            icon={<FaCheck />}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
      {isOpen && (
        <ModalCheckout
          setIsOpen={setIsOpen}
          formData={formData}
          totalPrice={totalPrice}
        />
      )}
    </section>
  );
};

export default Checkout;
