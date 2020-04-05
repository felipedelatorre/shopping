import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import SignUp from './Security/SignUp/SignUp';
import LogIn from './Security/LogIn/LogIn';
import NoMatch from './NoMatch/NoMatch';

import { UsersContext } from './Context';

const App = () => {
  const { getUser, logOut } = useContext(UsersContext);
  const user = getUser();

  return (
    <div className="w-3/4 m-auto border ">
      <Switch>
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route
          path="/"
          component={() => <Home user={user} logOut={logOut} />}
        />
      </Switch>
    </div>
  );
};

export default App;
