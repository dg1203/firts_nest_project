import { createContext } from 'react';
import { UserInterface } from '../../services/auth/type';

type AuthContext = {
  user: UserInterface | null;
  setUser(user: UserInterface | null): void;
};

const toastContext = createContext<AuthContext>({
  user: null,
  setUser: user => {
    throw new Error('setMessage() not implemented');
  }
});

export default toastContext;
