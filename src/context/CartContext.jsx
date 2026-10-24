import { createContext, useEffect, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'add_to_cart': {
      const existProduct = state.some((item) => item.id === action.payload.id);
      if (existProduct) return state;
      return [...state, action.payload];
    }
    case 'remove_from_cart':
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, [], () => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const count = state.length;

  return (
    <CartContext.Provider value={{ state, count, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
