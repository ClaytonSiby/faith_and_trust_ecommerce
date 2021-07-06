/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthWrapper from '../AuthWrapper';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
import { resetPassword, resetAllAuthForms } from '../../redux/User/user.actions';
import './styles.scss';

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  resetPasswordError: user.resetPasswordError,
});

const EmailPassword = (props) => {
  const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetAllAuthForms());
      props.history.push('/login');
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
      setErrors(resetPasswordError);
    }
  }, [resetPasswordError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email }));
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
