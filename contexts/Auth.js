/* eslint-disable import/no-named-as-default-member */
import React, { createContext, useState, useEffect } from 'react';
import firebase from '../firebase/firebase';

export const AuthContext = createContext({ user: null });

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
