import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Breadcrumbs from '../components/Breadcrumbs';

const Cart = () => {
  const { state, count } = useContext(CartContext);
  console.log(state);

  return (
    <section className='max-w-300 mx-auto mb-10'>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Cart' }]} />
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
                  <p className='truncate text-[0.9rem] font-bold'>{p.title}</p>
                  <p className='text-[0.8rem] text-gray-600'>
                    {p.stock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
              </div>

              {/* Quantity controls */}
              <div className='flex shrink-0 items-center gap-3 rounded-xl border border-gray-300 px-3 py-2'>
                <button type='button' aria-label='Decrease quantity'>
                  −
                </button>
                <span className='font-semibold'>1</span>
                <button type='button' aria-label='Increase quantity'>
                  +
                </button>
              </div>

              {/* Price and remove button */}
              <div className='flex shrink-0 items-center gap-4'>
                <span className='font-bold'>${p.price}</span>
                <button
                  type='button'
                  aria-label={`Remove ${p.title} from cart`}
                  className='text-red-500'
                >
                  {/* Add your trash icon here */}×
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='border border-border-dark rounded-md bg-white p-4'>
          <h1>Hello</h1>
        </div>
      </div>
    </section>
  );
};

export default Cart;
