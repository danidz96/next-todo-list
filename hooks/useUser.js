import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';

export const useSession = () => {
  const { user } = useContext(AuthContext);
  return user;
};
