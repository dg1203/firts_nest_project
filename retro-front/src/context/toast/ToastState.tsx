import React, { useReducer } from 'react';
import ToasContext from './toastContext';
import toastReducer from './toastReducer';
import { SET_MESSAGE } from './types';

const ToastState = (props: any) => {
  const initialState = {
    message: '',
    type: ''
  };

  const setMessage = (message: string, type: string) => {
    dispatch({
      type: SET_MESSAGE,
      payload: {
        message: message ? message : 'Something went wrong.',
        type
      }
    });
    setTimeout(() => {
      dispatch({
        type: SET_MESSAGE,
        payload: {
          message: '',
          type: ''
        }
      });
    }, 5000);
  };

  const [state, dispatch] = useReducer(toastReducer, initialState);

  return (
    <ToasContext.Provider
      value={{
        message: state.message,
        type: state.type,
        setMessage
      }}
    >
      {props.children}
    </ToasContext.Provider>
  );
};

export default ToastState;
