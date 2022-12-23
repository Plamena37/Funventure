import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import FAQ from "./pages/FAQ";
import Main from "./pages/Main";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Favorite from "./pages/Favorite";
import AddEvent from "./pages/AddEvent";
import SingleCard from "./pages/SingleCard";
import ProfilePage from "./pages/ProfilePage";
import ModalChangePassword from "./components/Layout/Modal";
import Purchase from "./pages/Purchase";
import Modal from "./components/Purchase/Modal";
import ModalEvent from "./components/AddEvent/ModalEvent";
import FinalPreview from "./components/Purchase/FinalPreview";
import { EventContext } from "./context/EventsContextProvider";
import { SnackbarProvider } from "notistack";
import AllEvents from "./pages/AllEvents";

function App() {
  const eventCtx = useContext(EventContext);
  const isLoggedIn = eventCtx.isLoggedIn;

  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={!isLoggedIn ? <LogIn /> : <Main />} />
          <Route path="/signup" element={!isLoggedIn ? <SignUp /> : <Main />} />

          <Route path="/events" element={<AllEvents />} />
          <Route
            path="/favorite"
            element={isLoggedIn ? <Favorite /> : <LogIn />}
          />
          <Route
            path="/add-event"
            element={isLoggedIn ? <AddEvent /> : <LogIn />}
          />
          {/* <Route path="/event" element={<SingleCard />} /> */}
          <Route path="/events/:eventId" element={<SingleCard />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <ProfilePage /> : <LogIn />}
          />
          <Route
            path="/change-password"
            element={isLoggedIn ? <ModalChangePassword /> : <LogIn />}
          />
          <Route
            path="/purchase"
            element={isLoggedIn ? <Purchase /> : <LogIn />}
          />
          <Route
            path="/final-preview"
            element={isLoggedIn ? <FinalPreview /> : <LogIn />}
          />
          <Route
            path="/purchase-success"
            element={isLoggedIn ? <Modal /> : <LogIn />}
          />
          <Route
            path="/added-event"
            element={isLoggedIn ? <ModalEvent /> : <LogIn />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
