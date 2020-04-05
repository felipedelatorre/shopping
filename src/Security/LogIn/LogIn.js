import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { UsersContext } from '../../Context';

import shoppingCatLogo from '../../assets/shoppingCat.png';

const GenericHeader = () => (
  <div>
    <a href="/">
      <img className="w-1/12" alt="logo" src={shoppingCatLogo} />
    </a>
    <h1>Shopping Cat</h1>
  </div>
);

const SignUp = ({ history }) => {
  const { register, handleSubmit } = useForm();

  const usersContext = useContext(UsersContext);
  const { logIn } = usersContext;

  const onSubmit = formData => {
    logIn(formData);
    history.push('/');
  };

  return (
    <div>
      <GenericHeader />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="userName"
          placeholder="Username"
          ref={register({ required: true })}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignUp;

SignUp.propTypes = {
  history: PropTypes.object,
};
