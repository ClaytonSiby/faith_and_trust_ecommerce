/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import FormInput from '../Forms/FormInput';
import AuthWrapper from '../AuthWrapper';
import { signInWithGoogle, auth } from '../../Firebase/utils';
import './styles.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      resetForm();
    } catch (error) {
      // console.log(error);
    }
  };
  const configAuthWrapper = {
    headline: 'Login',
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
          <FormInput type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******" />
          <Button type="submit">Login</Button>
          <div className="socialSignin">

            <Button type="button" onClick={signInWithGoogle}>Google SignIn</Button>

          </div>
          <div className="links">
            <Link to="/recovery">Forgot Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
