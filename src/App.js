import "./Colors.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Main from "./pages/Main";
import LogIn from "./pages/LogIn";
import Events from "./pages/Events";
import Favorite from "./pages/Favorite";
import AddEvent from "./pages/AddEvent";
import SingleCard from "./pages/SingleCard";
import Profile from "./pages/Profile";
import Purchase from "./pages/Purchase";
import FinalPreview from "./pages/FinalPreview";
import Modal from "./components/Purchase/Modal";
import ModalEvent from "./components/AddEvent/ModalEvent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/events" element={<Events />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/event" element={<SingleCard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/final-preview" element={<FinalPreview />} />
        <Route path="/purchase-success" element={<Modal />} />
        <Route path="/added-event" element={<ModalEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
