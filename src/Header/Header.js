import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import shoppingCatLogo from '../assets/shoppingCat.png';

const Header = ({ history }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = formData => {
    console.log(formData);
    history.push('./Browse');
  };

  return (
    <div className="mx-2 flex border-t border-b">
      <div className="w-1/4 flex">
        <div className="w-1/2">
          <a href="/">
            <img className="w-3/4" alt="logo" src={shoppingCatLogo} />
          </a>
        </div>
        <div className="w-1/2 my-auto">
          <h1>Shopping Cat</h1>
        </div>
      </div>
      <div className="my-auto w-full pl-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2 w-3/4"
            name="search"
            placeholder="🔎 Search Anything"
            ref={register({ required: true })}
          />

          <button className="ml-8" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Header);

Header.propTypes = {
  history: PropTypes.object,
};
