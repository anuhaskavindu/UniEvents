import React, { createContext, useContext, useState } from "react";

type FavoriteItem = {
  id: string | number;
  [key: string]: unknown;
};

type FavoritesContextValue = {
  favorites: FavoriteItem[];
  toggleFavorite: (event: FavoriteItem) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const toggleFavorite = (event: FavoriteItem) => {
    setFavorites((previous) => {
      const alreadyAdded = previous.some((item) => item.id === event.id);

      if (alreadyAdded) {
        return previous.filter((item) => item.id !== event.id);
      }

      return [...previous, event];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites(): FavoritesContextValue {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
}
