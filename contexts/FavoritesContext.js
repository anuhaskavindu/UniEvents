
import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (event) => {
    setFavorites((previous) => {
      const alreadyAdded = previous.some(
        (item) => item.id === event.id
      );

      if (alreadyAdded) {
        return previous.filter(
          (item) => item.id !== event.id
        );
      }

      return [...previous, event];
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
