import "./ToFavorite.css";
import ToFavoriteLayout from "./ToFavoriteLayout";
import EventItem from "../Events/EventItem";
import { useContext } from "react";
import FavoritesContext from "../../context/FavoritesContext";
import EventList from "../Events/EventList";

export default function ToFavorite() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p className="no-content__message">
        You got no favorites yet. Start adding some?
      </p>
    );
  } else {
    content = <EventList events={favoritesCtx.favorites} />;
  }

  return (
    <ToFavoriteLayout children>
      <div className="favorite__header">
        <i class="far fa-heart favorite__icon"></i>
        <h2 className="favorite__primary__heading">My Favorites</h2>
      </div>
      {content}
    </ToFavoriteLayout>
  );
}
