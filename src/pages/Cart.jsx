import Breadcrumbs from '../components/Breadcrumbs';
console.log(Array.from('from'));
const Cart = () => {
  return (
    <section className='max-w-300 mx-auto'>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Cart' }]} />
    </section>
  );
};

export default Cart;
