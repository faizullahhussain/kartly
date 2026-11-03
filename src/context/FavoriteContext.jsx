import { useState, useEffect, useContext, createContext } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedProduct = localStorage.getItem('product_favorites');
    return savedProduct ? JSON.parse(savedProduct) : [];
  });

  useEffect(() => {
    localStorage.setItem('product_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // add item to fav
  const addToFavorite = (item) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === item.id)) return prev;
      return [...prev, item];
    });
  };
  const clearFavorites = () => {
    setFavorites([]);
  };
  //remove  item
  const removeFavorite = (itemId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== itemId));
  };

  const isFavorite = (itemId) => {
    return favorites.some((item) => item.id === itemId);
  };

  // toggle favorite
  const toggleFavorite = (item) => {
    if (isFavorite(item.id)) {
      removeFavorite(item.id);
    } else {
      addToFavorite(item); // Complete product object
    }
  };
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('UseFavorite must be used in Favorite Provider');
  }
  return context;
}
