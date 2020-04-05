import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const TopNav = ({ user, logOut }) => {
  const handleLogOut = () => {
    logOut();
  };

  if (user) {
    return (
      <div className="flex row justify-between pt-2 pb-4">
        <div className="flex row border">
          <div className="text-xs">Welcome {user}</div>
        </div>
        <div className="flex row border">
          <div className="pr-5 text-xs">
            <a href="/SignUp">Sell</a>
          </div>
          <div className="pr-5 text-xs">
            <a href="/SignUp">My Account</a>
          </div>
          <div className="text-xs">
            <button type="button" onClick={handleLogOut}>
              Log out
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex row justify-between pt-2 pb-4">
      <div className="flex row border">
        <div className="pr-5 text-xs">
          <a href="/SignIn">Sign In</a>
        </div>
        <div className="text-xs">
          <a href="/SignUp">Sign Up</a>
        </div>
      </div>
      <div className="flex row border">
        <div className="pr-5 text-xs">
          <a href="#">Sell</a>
        </div>
        <div className="text-xs">
          <a href="#">My Account</a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TopNav);

TopNav.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func,
};
