/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import AuthWrapper from '../AuthWrapper';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';

// firebase
import { auth } from '../../Firebase/utils';
import './styles.scss';

const EmailPassword = (props) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // url to send user when they have reset their passord
      const config = {
        url: 'http://localhost:3000/login',
      };

      await auth.sendPasswordResetEmail(email, config)
        .then(() => {
          props.history.push('/login');
        })
        .catch(() => {
          const err = ['email not found! Please try again.'];

          setErrors(err);
        });
    } catch (error) {
      // console.log(error)
    }
  };

  const configAuthWrapper = {
    headline: 'Email Password',
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        { errors.length > 0 && (
        <ul>
          { errors.map((error) => (
            <li key={Math.random() * 20} className="text-danger">{ error }</li>
          )) }
        </ul>
        )}
        <form onSubmit={handleSubmit}>
          <FormInput type="email" name="email" value={email} placeholder="Email Address" handleChange={(e) => setEmail(e.target.value)} />
          <Button type="submit">Email Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(EmailPassword);
