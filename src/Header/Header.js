import React from 'react';
import shoppingCatLogo from '../assets/shoppingCat.png';

const Header = () => (
  <div className="border">
    <a href="/">
      <img className="w-1/12 border" alt="logo" src={shoppingCatLogo} />{' '}
    </a>
    <h1>Shopping Cat</h1>
  </div>
);

export default Header;
