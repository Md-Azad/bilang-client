import { useEffect, useState } from "react";
import { AuthContext } from "./Contexts";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const updateUser = (updatedInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedInfo);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    updateUser,
    logOut,
    googleLogin,
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post(`http://localhost:3000/jwt`, user, { withCredentials: true })
          .then(() => {
            setLoading(false);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        axios
          .post("http://localhost:3000/logout", {}, { withCredentials: true })
          .then(() => {
            setLoading(false);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
    return () => {
      unSubcribe();
    };
  }, [user?.email]);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
