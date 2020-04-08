import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthService, Security } from '@okta/okta-react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { UsersContextProvider } from './Context';

const { REACT_APP_OKTA_ORG_URL, REACT_APP_OKTA_CLIENT_ID } = process.env;

const authService = new AuthService({
  issuer: `${REACT_APP_OKTA_ORG_URL}/oauth2/default`,
  clientId: REACT_APP_OKTA_CLIENT_ID,
  pkce: true,
  redirectUri: `${window.location.origin}/implicit/callback`,
});

ReactDOM.render(
  <React.StrictMode>
    <Security authService={authService}>
      <UsersContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UsersContextProvider>
    </Security>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
