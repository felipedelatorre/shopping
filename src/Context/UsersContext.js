import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});

export const Provider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUserData = () => {
      const userName = localStorage.getItem('userName') || null;
      setUser(userName);
    };

    getUserData();
  });

  const logIn = ({ userName }) => {
    localStorage.setItem('userName', userName);
    setUser(userName);
  };

  const getUser = () => user;

  const logOut = () => {
    localStorage.clear();
    setUser(null);
  };

  const usersContext = {
    getUser,
    logIn,
    logOut,
  };

  return <Context.Provider value={usersContext}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.object,
};
