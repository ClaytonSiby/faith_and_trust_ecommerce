/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';

import AuthWrapper from '../AuthWrapper';

// firebase
import { auth, handleUserProfile } from '../../Firebase/utils';

import './styles.scss';

const Signup = (props) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const resetForm = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      const err = ['Passwords Don\'t match'];
      setErrors(err);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await handleUserProfile(user, { displayName });

      resetForm();
      props.history.push('/');
    } catch (error) {
      // console.log(error);
    }
  };

  const configAuthWrapper = {
    headline: 'Registration',
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="wrap">
        <div className="formWrap">
          { errors.length > 0 && (
            <ul>
              { errors.map((err) => (
                <li key={Math.random() * 100}>
                  {' '}
                  { err }
                  {' '}
                </li>
              ))}
            </ul>
          )}
          <form onSubmit={handleFormSubmit}>
            <FormInput type="text" name="displayName" value={displayName} handleChange={(e) => setDisplayName(e.target.value)} placeholder="Full Name" />
            <FormInput type="email" name="email" value={email} handleChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
            <FormInput type="password" name="password" value={password} handleChange={(e) => setPassword(e.target.value)} placeholder="********" />
            <FormInput type="password" name="confirmPassword" value={confirmPassword} handleChange={(e) => setConfirmPassword(e.target.value)} placeholder="********" />
            <Button type="submit">Register</Button>
          </form>
        </div>
      </div>
    </AuthWrapper>
  );
};

Signup.propTypes = {
  history: PropTypes.string.isRequired,
};

export default withRouter(Signup);
