import { useContext } from 'react';
import { FiTrash } from 'react-icons/fi';
import Breadcrumbs from '../components/Breadcrumbs';
import EmptyCard from '../components/EmptyCard';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { state, count, dispatch } = useContext(CartContext);

  const totalPrice = state.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  console.log(state);
  return (
    <>
      <section className='max-w-300 mx-auto mb-10'>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Cart' }]} />

        {state.length > 0 && (
          <>
            <h1 className='text-2xl font-bold mb-4'>Shopping Cart ({count})</h1>

            <div className='grid grid-cols-1 items-start md:grid-cols-[1fr_minmax(0,250px)] gap-8'>
              <div className='space-y-2'>
                {state.map((p) => (
                  <div
                    key={p.id}
                    className='flex items-center justify-between gap-4 rounded-2xl border border-border-dark bg-white p-3'
                  >
                    {/* Product information */}
                    <div className='flex min-w-0 items-center gap-4'>
                      <div className='flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100'>
                        <img
                          src={p.thumbnail}
                          alt={p.title}
                          className='h-full w-full object-contain'
                        />
                      </div>

                      <div className='min-w-0'>
                        <p className='truncate text-[0.9rem] font-bold'>
                          {p.title}
                        </p>
                        <p className='text-[0.8rem] text-gray-600'>
                          {p.stock ? 'In Stock' : 'Out of Stock'}
                        </p>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className='flex shrink-0 items-center gap-3 rounded-md border border-gray-300 px-3'>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'decrease_product_quantity',
                            payload: { id: p.id },
                          })
                        }
                        type='button'
                        aria-label='Decrease quantity'
                      >
                        −
                      </button>
                      <span className='font-semibold'>{p.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'increase_product_quantity',
                            payload: { id: p.id },
                          })
                        }
                        type='button'
                        aria-label='Increase quantity'
                      >
                        +
                      </button>
                    </div>

                    {/* Price and remove button */}
                    <div className='flex shrink-0 items-center gap-4'>
                      <span className='font-bold'>
                        ${(p.price * p.quantity).toFixed(0)}
                      </span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'remove_from_cart',
                            payload: p.id,
                          })
                        }
                        type='button'
                        aria-label={`Remove ${p.title} from cart`}
                        className='text-red-500'
                      >
                        <FiTrash size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className='border border-border-dark rounded-md bg-white p-4'>
                <h1 className='font-bold text-[0.8rem] mb-2'>Order Summary</h1>
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
                </ul>
              </div>
            </div>
          </>
        )}
      </section>
      {state.length === 0 && <EmptyCard />}
    </>
  );
};

export default Cart;
