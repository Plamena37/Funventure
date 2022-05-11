import React, { useState, useEffect, useRef } from "react";
import { auth } from "../firebase";
import firebase from "../firebase";

export const AuthenticationContext = React.createContext({
  currentUser: {},
  signUp: () => {},
  login: () => {},
  logout: () => {},
  signUpWithGoogle: () => {},
  resetPassword: () => {},
});

export default function AuthenticationProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const loadedUserFromStorage = useRef(false);

  // Executes only once (when the component loads for the first time)
  useEffect(() => {
    // This returns a promise that when it's called it unsubscribes when the component UNMOUNTS.

    const unsubscribe = auth.onAuthStateChanged((user) => {
      loadedUserFromStorage.current = true;
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  //------------------------------ METHODS ------------------------------
  function signUp(email, password, username) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const user = response.user;
        user.updateProfile({
          displayName: username,
        });
      });
  }

  function login(email, password) {
    return auth
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return auth.signInWithEmailAndPassword(email, password);
      });
  }

  function logout() {
    return auth.signOut();
  }

  function signUpWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }
  //---------------------------------------------------------------------

  const values = {
    currentUser,
    signUp,
    login,
    logout,
    signUpWithGoogle,
    resetPassword,
    loadedUserFromStorage: loadedUserFromStorage.current,
  };

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
}
