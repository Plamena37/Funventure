import ToFavorite from "../components/Favorite/ToFavorite";
import NavigationLayout from "../components/Layout/NavigationLayout";

export default function Favorite() {
  return (
    <div className="favorite__body">
      <NavigationLayout>
        <ToFavorite />
      </NavigationLayout>
    </div>
  );
}
