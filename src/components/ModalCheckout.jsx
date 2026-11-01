import { FaCheck } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ModalCheckout = ({ setIsOpen, formData, totalPrice }) => {
  return (
    <div className='fixed inset-0 flex justify-center items-center z-50 bg-black/50'>
      <div className='w-150 bg-white shadow-lg text-center p-4 rounded-md relative my-10'>
        <div>
          <span className='bg-[#16a34a] inline-block p-2 rounded-full text-white outline-6 outline-[#dcfce7]'>
            <FaCheck size={13} className='mx-auto' />
          </span>
          <h2 className='text-xl font-semibold'>Ordered Placed Successfully</h2>
          <p className='text-[0.9rem] text-[#6e6b7d] mb-3'>
            Thanks for trying the demo, {formData.firstName}. Here is the a
            summary of your details
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className='text-2xl text-gray-500 hover:text-gray-900 absolute top-1 right-3 cursor-pointer'
          aria-label='Close modal'
        >
          &times;
        </button>

        <div className='text-left border border-border-dark rounded-md p-4 mb-3'>
          <h2 className='text-[#6e6b7d] uppercase'>Shipping Details</h2>
          <ul>
            <li className='flex justify-between items-center'>
              <span className='text-[0.9rem] text-[#6e6b7d]'>Name:</span>
              <span>
                <strong>
                  {formData.firstName} {formData.lastName}
                </strong>
              </span>
            </li>

            <li className='flex justify-between items-center'>
              <span className='text-[0.9rem] text-[#6e6b7d]'>Email:</span>
              <span>
                <strong>{formData.email}</strong>
              </span>
            </li>

            <li className='flex justify-between items-center'>
              <span className='text-[0.9rem] text-[#6e6b7d]'>Address:</span>
              <span>
                <strong>{formData.address}</strong>
              </span>
            </li>

            <li className='flex justify-between items-center'>
              <span className='text-[0.9rem] text-[#6e6b7d]'>City:</span>
              <span>
                <strong>{formData.city}</strong>
              </span>
            </li>

            <li className='flex justify-between items-center'>
              <span className='text-[0.9rem] text-[#6e6b7d]'>Postal Code:</span>
              <span>
                <strong>{formData.postalCode}</strong>
              </span>
            </li>
          </ul>
        </div>

        <div className='text-left border border-border-dark rounded-md p-4'>
          <h2 className='text-[#6e6b7d] uppercase'>Order Summary</h2>
          <ul>
            <li className='flex justify-between items-center'>
              <span className='text-[0.9rem] text-[#6e6b7d]'>Subtotal:</span>
              <span>
                <strong>${totalPrice.toFixed(0)}</strong>
              </span>
            </li>
            <li className='flex justify-between items-center'>
              <span className='text-[0.9rem] text-[#6e6b7d]'>Shipping:</span>
              <span>
                <strong>Free</strong>
              </span>
            </li>
            <hr className='text-[#6e6b7d]' />
            <li className='flex justify-between items-center'>
              <span className='text-[0.9rem] text-[#6e6b7d]'>Total:</span>
              <span>
                <strong>${totalPrice.toFixed(0)}</strong>
              </span>
            </li>
          </ul>
        </div>

        <div className='bg-[#fffbeb] border border-amber-500 rounded-md p-4 mt-3'>
          <div className='flex items-center'>
            <MdErrorOutline size={36} className='text-amber-400' />
            <p>
              <strong>Demo store.</strong> No real payment was processed and no
              order will be shipped. Card details are not saved.
            </p>
          </div>
        </div>
        <Link
          to='/shop'
          className='w-full bg-primary p-4 block rounded-md mt-3 text-white'
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ModalCheckout;
