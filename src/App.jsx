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
import { FavoritesProvider } from './context/FavoriteContext';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Header />
        <main className='px-4 pb-18 md:pb-0'>
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
            <Route
              path='*'
              element={
                <PageTransition>
                  <PageNotFound />
                </PageTransition>
              }
            ></Route>
          </Routes>
        </main>
        <Footer />
      </FavoritesProvider>
    </CartProvider>
  );
};

export default App;
