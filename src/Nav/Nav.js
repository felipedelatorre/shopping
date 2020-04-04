import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { UsersContext } from '../Context';

const Nav = () => {
  const usersContext = useContext(UsersContext);
  const { logOut } = usersContext;

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <div>
        <a href="/">Home</a>
      </div>
      <div>
        <a href="/SignUp">Sign Up</a>
      </div>
      <div>
        <button type="button" onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default withRouter(Nav);
