import { FiArrowRight } from 'react-icons/fi';
import { GrSecure } from 'react-icons/gr';
import { IoReload } from 'react-icons/io5';
import { TbTruck } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import herobg from '../assets/images/hero-banner.png';
import FeatureProduct from '../components/FeatureProducts';

const Home = () => {
  return (
    <>
      <section className='mx-auto mt-8 w-full max-w-280'>
        <div className='flex flex-col overflow-hidden rounded-[28px] bg-indigo-50 md:h-105 md:flex-row md:items-center'>
          {/* Text side */}
          <div className='p-8 md:w-140 md:shrink-0 md:px-15 md:py-0'>
            <h1 className='mb-4 text-3xl font-extrabold leading-[1.1] text-secondary md:text-[50px]'>
              Everyday gear you will actually love
            </h1>
            <p className='mb-7 text-lg text-gray-600'>
              Shop our newest arrivals with free shipping on orders over $50.
            </p>

            <Link
              to='/shop'
              className='inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-7 py-3.75 font-bold text-white hover:opacity-90'
            >
              <span>Shop now</span>
              <FiArrowRight size={18} />
            </Link>
          </div>

          {/* Image side */}
          <div className='hidden md:block h-56 w-full md:h-full md:min-w-0 md:flex-1'>
            <img
              src={herobg}
              alt='Shopping bag illustration'
              className='h-full w-full object-contain'
            />
          </div>
        </div>
      </section>

      <section className='grid grid-cols-3 gap-4 mx-auto max-w-280 my-10'>
        <div className='flex flex-col md:flex-row items-center gap-2 bg-white border border-border-dark rounded-md p-3'>
          <TbTruck size={24} className='text-primary' />
          <div>
            <h2 className='text-bold text-[0.8rem] font-bold'>Free Shipping</h2>
            <p className='text-[0.8rem] text-secondary'>On oders over $50</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-2 bg-white border border-border-dark rounded-md p-3'>
          <IoReload size={24} className='text-primary' />
          <div>
            <h2 className='text-bold text-[0.8rem] font-bold'>
              30-day returns
            </h2>
            <p className='text-[0.8rem] text-secondary'>No questions asked</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-2 bg-white border border-border-dark rounded-md p-3'>
          <GrSecure size={24} className='text-primary' />
          <div>
            <h2 className='text-bold text-[0.8rem] font-bold'>
              Secure Payment
            </h2>
            <p className='text-[0.8rem] text-secondary'>100% protected</p>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-300 my-10'>
        <FeatureProduct />
      </section>
    </>
  );
};

export default Home;
