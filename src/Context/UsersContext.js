import React, { createContext, useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import PropTypes from 'prop-types';

export const Context = createContext({});

export const Provider = ({ children }) => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      authService.getUser().then(info => {
        setUserInfo(info);
      });
    }
  }, [authState, authService]); // Update if authState changes

  const logIn = () => {
    authService.login();
  };

  const logOut = () => {
    authService.logout();
  };

  const usersContext = {
    userInfo,
    logIn,
    logOut,
  };

  return <Context.Provider value={usersContext}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.object,
};
