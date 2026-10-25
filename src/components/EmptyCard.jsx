import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const EmptyCard = () => {
  return (
    <section className='text-center mb-30'>
      <span className='bg-[#e0e7ff] inline-block p-4 rounded-full'>
        <BiCart size={44} className='mx-auto ' />
      </span>

      <h1 className='text-2xl font-bold'>Your cart is empty</h1>
      <p className='text-[1.2rem] text-[#69707e] mt-4 max-w-125 mx-auto'>
        Looks like you haven't added anything yet. Browse our products and find
        something you'll love.
      </p>
      <Link
        className='bg-primary px-8 py-3 inline-block mt-4 rounded-md text-white'
        to='/shop'
      >
        Continue Shopping
      </Link>
    </section>
  );
};

export default EmptyCard;
