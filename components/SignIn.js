import React from 'react';
import firebase, { signInWithGoogle } from '../firebase/firebase';

const SignIn = () => (
  <button type="button" onClick={signInWithGoogle}>
    click
  </button>
);

export default SignIn;
