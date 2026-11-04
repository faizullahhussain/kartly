import { Link } from 'react-router-dom';

const EmptyCard = ({ cardTitle, cardDescription, icon: Icon }) => {
  return (
    <section className='text-center my-30'>
      <span className='bg-[#e0e7ff] inline-block p-4 rounded-full'>
        <Icon size={30} className='mx-auto ' />
      </span>

      <h1 className='text-2xl font-bold'>{cardTitle}</h1>
      <p className='text-[1.2rem] text-[#69707e] mt-4 max-w-125 mx-auto'>
        {cardDescription}
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
