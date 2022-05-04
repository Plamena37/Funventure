import Navigation from "../components/Layout/Navigation";
import ToFavorite from "../components/Favorite/ToFavorite";
import Footer from "../components/Layout/Footer";

export default function Favorite() {
  return (
    <>
      <div className="favorite__body">
        <Navigation />
        <ToFavorite />
        <Footer />
      </div>
    </>
  );
}
