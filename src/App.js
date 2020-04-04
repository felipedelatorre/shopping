import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import { UsersContext } from './Context';

const App = () => {
  const { getUser } = useContext(UsersContext);
  const user = getUser();

  return (
    <div className="w-3/4 m-auto border ">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <Home user={user} />} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
