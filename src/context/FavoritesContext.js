import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteEvent) => {},
  removeFavorite: (eventId) => {},
  itemIsFavorite: (eventId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteEvent) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteEvent);
    });
  }
  console.log(userFavorites);

  function removeFavoriteHandler(eventId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((events) => events.id !== eventId);
    });
  }

  function itemIsFavoriteHandler(eventId) {
    return userFavorites.some((events) => events.id === eventId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
