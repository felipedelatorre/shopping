import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Header from './Header/Header';
import Nav from './Nav/Nav';

const App = () => (
  <div className="w-3/4 m-auto border ">
    <Header />
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/sell" ></Route> */}
    </Switch>
  </div>
);

export default App;
