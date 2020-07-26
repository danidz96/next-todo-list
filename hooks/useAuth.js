import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

export const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  return [user, loading, error];
};
