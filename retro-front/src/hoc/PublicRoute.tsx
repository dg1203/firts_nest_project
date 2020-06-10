import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import Preloader from '../components/Preloader';

// @ts-ignore
const PublicRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const { user } = authContext;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? (
    <Preloader />
  ) : (
    <Route
      {...rest}
      render={(props: any) =>
        !user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/dashboard' }} />
        )
      }
    />
  );
};

export default PublicRoute;
