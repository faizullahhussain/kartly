import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Productdetails from './ui/Productdetails';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Header />
      <main className='px-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='product/:productId' element={<Productdetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
};

export default App;
