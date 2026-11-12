import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='hidden md:block bg-secondary text-white py-8 px-4'>
      <div className='mx-auto max-w-280 grid grid-cols-2 gap-10 md:gap-0 md:grid-cols-2 lg:grid-cols-4'>
        <div>
          <h4 className='text-[0.9rem] font-bold'>Kartly</h4>
          <p className='text-[0.7rem] text-[#969da9]'>
            Simple things, delivered
          </p>
        </div>

        <div>
          <h4 className='text-[0.9rem] font-bold'>Shop</h4>
          <ul>
            <li>
              <a
                className='text-[0.7rem] text-[#969da9] hover:text-white transition-colors'
                href='#'
              >
                All Products
              </a>
            </li>
            <li>
              <a
                className='text-[0.7rem] text-[#969da9] hover:text-white transition-colors'
                href='#'
              >
                New Arrival
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-[0.9rem] font-bold'>Help</h4>
          <ul>
            <li>
              <a
                className='text-[0.7rem] text-[#969da9] hover:text-white transition-colors'
                href='#'
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                className='text-[0.7rem] text-[#969da9] hover:text-white transition-colors'
                href='#'
              >
                Returns
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-[0.9rem] font-bold'>Follow Us</h4>
          <ul>
            <li>
              <a
                className='text-[0.7rem] text-[#969da9] hover:text-white transition-colors'
                href='#'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className='text-[0.7rem] text-[#969da9] hover:text-white transition-colors'
                href='#'
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
