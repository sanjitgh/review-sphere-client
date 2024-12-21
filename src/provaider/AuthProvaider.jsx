import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvaider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handelLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handelGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvaider);
  };

  const manageProfile = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const handelLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userInfo = {
    user,
    loading,
    createUser,
    handelLogin,
    manageProfile,
    handelGoogleLogin,
    handelLogout,
    user,
    setUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);

      return () => {
        unsubscribe();
      };
    });
  }, []);
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;
