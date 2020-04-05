import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import TopNav from '../TopNav/TopNav';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import MainContent from '../MainContent/MainContent';
import NoMatch from '../NoMatch/NoMatch';

const Browse = () => <h1>Browse Content</h1>;

const Home = ({ user, logOut }) => (
  <div>
    <TopNav user={user} logOut={logOut} />
    <Header />
    <Nav />
    <Switch>
      <Route exact path="/" component={MainContent} />
      <Route path="/Browse" component={Browse} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default Home;

Home.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func,
};
