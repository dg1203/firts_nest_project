import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ToastState from './context/toast/ToastState';
import AuthState from './context/auth/AuthState';

ReactDOM.render(
  <AuthState>
    <ToastState>
      <App />
    </ToastState>
  </AuthState>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
