import "./ToFavorite.css";
import ToFavoriteLayout from "./ToFavoriteLayout";
import EventList from "../Events/EventList";

export default function ToFavorite() {
  let content, favorites;

  favorites = JSON.parse(localStorage.getItem("favorites"));

  if (favorites.length === 0) {
    content = (
      <p className="no-content__message">
        You got no favorites yet. Start adding some?
      </p>
    );
  } else {
    content = <EventList events={favorites} />;
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
