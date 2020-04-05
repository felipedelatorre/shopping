import React from 'react';
import { withRouter } from 'react-router';

const Nav = () => (
  <div className="flex row justify-between border">
    <div className="text-sm pl-2">
      <a href="/">Home</a>
    </div>
    <div className="text-sm">
      <a href="#">Fashion</a>
    </div>
    <div className="text-sm">
      <a href="#">Electronics</a>
    </div>
    <div className="text-sm">
      <a href="#">Home</a>
    </div>
    <div className="text-sm pr-2">
      <a href="#">Food</a>
    </div>
  </div>
);

export default withRouter(Nav);
