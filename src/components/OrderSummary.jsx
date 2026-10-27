import { Link } from 'react-router-dom';

const OrderSummary = ({ totalPrice, buttonText, icon }) => {
  return (
    <ul>
      <li className='flex justify-between text-gray-500 text-[0.8rem]'>
        <span>Subtotal</span>
        <span>${totalPrice.toFixed(0)}</span>
      </li>
      <li className='flex justify-between text-gray-500 text-[0.8rem]'>
        <span>Shipping</span>
        <span>Free</span>
      </li>
      <hr className='text-gray-300 mt-2' />
      <li className='flex justify-between font-bold text-[0.8rem] mt-2'>
        <span>Total</span>
        <span>${totalPrice.toFixed(0)}</span>
      </li>

      <Link
        to='/checkout'
        className='bg-primary mx-auto flex text-white justify-center items-center gap-2 py-1 px-4 mt-2 rounded-md text-[0.8rem]'
      >
        {buttonText}
        {icon}
      </Link>
    </ul>
  );
};

export default OrderSummary;
