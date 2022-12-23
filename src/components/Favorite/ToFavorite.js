import "./ToFavorite.css";
import ToFavoriteLayout from "./ToFavoriteLayout";
import EventItem from "../Events/EventItem";

export default function ToFavorite() {
  return (
    <ToFavoriteLayout children>
      <div className="favorite__header">
        <i class="far fa-heart favorite__icon"></i>
        <h2 className="favorite__primary__heading">My Favorites</h2>
      </div>
      {/* <EventItem /> */}
    </ToFavoriteLayout>
  );
}
