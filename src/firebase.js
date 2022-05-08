import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5IvLHaFu1FNF72uhwZk0Qciy8kHdXvkU",
  authDomain: "fun-venture.firebaseapp.com",
  projectId: "fun-venture",
  storageBucket: "fun-venture.appspot.com",
  messagingSenderId: "736252276154",
  appId: "1:736252276154:web:80a5f2b631778880ce8183",
  measurementId: "G-YGMNYB9QTR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default app;
// const analytics = getAnalytics(app);
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = app.auth();
