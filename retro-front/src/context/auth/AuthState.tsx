import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { SET_CURRENT_USER } from './types';
import { UserInterface } from '../../services/auth/type';
import { setAxiosConfig } from '../../utils/config';

const AuthState = (props: any) => {
  const initialState = {
    user: null
  };

  const setUser = (user: UserInterface) => {
    setTimeout(() => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: user
      });
    }, 500);
    if (user) {
      setAxiosConfig(user.accessToken);
    }
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        setUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
