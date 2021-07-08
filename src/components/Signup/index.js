/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
import { signUpUserStart } from '../../redux/User/user.actions';
import AuthWrapper from '../AuthWrapper';
import './styles.scss';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userError: user.userError,
});

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, userError } = useSelector(mapState);
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

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push('/');
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userError) && userError.length > 0) {
      setErrors(userError);
    }
  }, [userError]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(signUpUserStart({
      displayName,
      email,
      password,
      confirmPassword,
    }));
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
  history: PropTypes.object.isRequired,
};

export default Signup;
