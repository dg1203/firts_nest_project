import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

// @ts-ignore
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  return (
    <Route
      {...rest}
      render={(props: any) =>
        user ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
