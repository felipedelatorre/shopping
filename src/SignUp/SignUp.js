import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { UsersContext } from '../Context';

const SignUp = ({ history }) => {
  const { register, handleSubmit } = useForm();

  const usersContext = useContext(UsersContext);
  const { logIn } = usersContext;

  const onSubmit = formData => {
    logIn(formData);
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="userName"
        placeholder="Username"
        ref={register({ required: true })}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;

SignUp.propTypes = {
  history: PropTypes.object,
};
