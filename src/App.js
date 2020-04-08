import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';

import Home from './Home/Home';
import SignUp from './Security/SignUp/SignUp';
import LogIn from './Security/LogIn/LogIn';

import { UsersContext } from './Context';

const App = () => {
  const { logIn, logOut, userInfo } = useContext(UsersContext);

  return (
    <div className="w-3/4 m-auto">
      <Switch>
        <Route path="/implicit/callback" component={LoginCallback} />

        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route
          path="/"
          component={() => (
            <Home userInfo={userInfo} logOut={logOut} logIn={logIn} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
