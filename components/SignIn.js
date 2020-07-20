import React from 'react';
import { signInWithGoogle } from '../firebase/firebase';

const SignIn = () => (
  <button type="button" onClick={signInWithGoogle}>
    click
  </button>
);

export default SignIn;
