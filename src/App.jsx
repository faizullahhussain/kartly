import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import PageTransition from './components/PageTransition';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Productdetails from './ui/Productdetails';
import FavoritesProduct from './components/FavoritesProduct';

const App = () => {
  return (
    <CartProvider>
      <Header />
      <main className='px-4'>
        <Routes>
          <Route
            path='/'
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path='/shop'
            element={
              <PageTransition>
                <Shop />
              </PageTransition>
            }
          />
          <Route
            path='product/:productId'
            element={
              <PageTransition>
                <Productdetails />
              </PageTransition>
            }
          />
          <Route
            path='/cart'
            element={
              <PageTransition>
                <Cart />
              </PageTransition>
            }
          />
          <Route
            path='/checkout'
            element={
              <PageTransition>
                <Checkout />
              </PageTransition>
            }
          />

          <Route
            path='/favorite'
            element={
              <PageTransition>
                <FavoritesProduct />
              </PageTransition>
            }
          ></Route>
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
};

export default App;
