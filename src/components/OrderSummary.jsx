import { Link } from 'react-router-dom';

const OrderSummary = ({ totalPrice, icon, mode = 'cart' }) => {
  const buttonClass =
    'bg-primary mx-auto flex w-full text-white justify-center items-center gap-2 py-1 px-4 mt-2 rounded-md text-[0.8rem] cursor-pointer';

  return (
    <div>
      <ul>
        <li className='flex justify-between text-gray-500 text-[0.8rem]'>
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(0)}</span>
        </li>
        <li className='flex justify-between text-gray-500 text-[0.8rem]'>
          <span>Shipping</span>
          <span>Free</span>
        </li>
        <li className='flex justify-between font-bold text-[0.8rem] mt-2 pt-2 border-t border-gray-300'>
          <span>Total</span>
          <span>${totalPrice.toFixed(0)}</span>
        </li>
      </ul>

      {mode === 'cart' ? (
        <Link to='/checkout' className={buttonClass}>
          Proceed to checkout
          {icon}
        </Link>
      ) : (
        <button
          // onClick={() => setIsOpen(true)}
          type='submit'
          form='checkout-form'
          className={buttonClass}
        >
          {icon}
          Place order
        </button>
      )}
    </div>
  );
};

export default OrderSummary;
