import { createContext } from 'react';

type ToastContext = {
  message: string;
  type: string;
  setMessage(message: string, type: string): void;
};

const toastContext = createContext<ToastContext>({
  message: '',
  type: '',
  setMessage: message => {
    throw new Error('setMessage() not implemented');
  }
});

export default toastContext;
