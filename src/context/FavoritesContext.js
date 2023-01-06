import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteEvent) => {},
  removeFavorite: (eventId) => {},
  itemIsFavorite: (eventId) => {},
});

export function FavoritesContextProvider(props) {
  // const [userFavorites, setUserFavorites] = useState([]);
  const [favoriteStorage, setFavoriteStorage] = useState([]);

  //------------------------ Add To Favorites ------------------------
  function addFavoriteHandler(favoriteEvent) {
    setFavoriteStorage((prevUserFavorites) => {
      const newFavorites = [favoriteEvent, ...favoriteStorage];
      const eventsDataJson = JSON.stringify(newFavorites);
      localStorage.setItem("favorites", eventsDataJson);

      return newFavorites;
    });
  }

  //------------------------ Remove From Favorites ------------------------
  function removeFavoriteHandler(eventId) {
    setFavoriteStorage((prevUserFavorites) => {
      const newFavorites = prevUserFavorites.filter(
        (events) => events.id !== eventId
      );
      const eventsDataJson = JSON.stringify(newFavorites);
      localStorage.setItem("favorites", eventsDataJson);
      return newFavorites;
    });
  }

  //------------------------ Check If Item Is Favorite ------------------------
  function itemIsFavoriteHandler(eventId) {
    // let newFavorites;
    // let exactEvent = favoriteStorage.find(
    //   (singleEvent) => singleEvent.id === eventId
    // );
    // if (exactEvent) {
    //   exactEvent.isFavorite = true;
    //   newFavorites = [...favoriteStorage, favoriteStorage[exactEvent]];
    // } else {
    //   return;
    // }

    // const eventsDataJson = JSON.stringify(newFavorites);
    // localStorage.setItem("favorites", eventsDataJson);

    return favoriteStorage.some((events) => events.id === eventId);
    // return newFavorites;
  }

  let favoritesLength = JSON.parse(localStorage.getItem("favorites"));

  const context = {
    favorites: favoriteStorage,
    // totalFavorites: userFavorites.length,
    totalFavorites: favoritesLength ? favoritesLength.length : 0,
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
