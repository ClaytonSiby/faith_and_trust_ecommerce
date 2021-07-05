/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../../redux/User/user.actions';
import Button from '../Forms/Button';
import FormInput from '../Forms/FormInput';
import AuthWrapper from '../AuthWrapper';
import { signInWithGoogle } from '../../Firebase/utils';
import './styles.scss';

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess,
});

const SignIn = (props) => {
  const dispatch = useDispatch();
  const { signInSuccess } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      props.history.push('/');
    }
  }, [signInSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInUser({ email, password }));
  };
  const configAuthWrapper = {
    headline: 'Login',
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
          />
          <Button type="submit">Login</Button>
          <div className="socialSignin">
            <Button type="button" onClick={signInWithGoogle}>
              Google SignIn
            </Button>
          </div>
          <div className="links">
            <Link to="/recovery">Forgot Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

SignIn.propTypes = {
  history: PropTypes.string.isRequired,
};

export default withRouter(SignIn);
