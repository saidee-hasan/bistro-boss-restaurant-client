import React, { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase.init";

// Create the AuthContext
export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = async (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Currently logged in User:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup function to unsubscribe from the listener

    return () => {
      unsubscribe();
    };
  }, [auth]);
  const signOutUser = ()=>{
    setLoading(true)
    return signOut(auth)
  }
  

  const value = {
    createUser,
    user,
    signOutUser,
    loginUser,
    loading
  };
  console.log(user)

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
