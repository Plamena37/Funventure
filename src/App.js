import "./Variables.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Main from "./pages/Main";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Events from "./pages/Events";
import Favorite from "./pages/Favorite";
import AddEvent from "./pages/AddEvent";
import SingleCard from "./pages/SingleCard";
import ProfilePage from "./pages/ProfilePage";
import Purchase from "./pages/Purchase";
import Modal from "./components/Purchase/Modal";
import ModalEvent from "./components/AddEvent/ModalEvent";
import FinalPreview from "./components/Purchase/FinalPreview";
import EventsContextProvider from "./context/EventsContextProvider";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <EventsContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/events" element={<Events />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/add-event" element={<AddEvent />} />
            <Route path="/event" element={<SingleCard />} />
            {/* <Route path="/event/:eventId" element={<SingleCard />} /> */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/final-preview" element={<FinalPreview />} />
            <Route path="/purchase-success" element={<Modal />} />
            <Route path="/added-event" element={<ModalEvent />} />
          </Routes>
        </Router>
      </EventsContextProvider>
    </SnackbarProvider>
  );
}

export default App;
