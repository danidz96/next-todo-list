import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';

export const useUser = () => {
  const { user } = useContext(AuthContext);
  return user;
};
