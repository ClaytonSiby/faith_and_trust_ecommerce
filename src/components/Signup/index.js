/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import FormInput from '../Forms/FromInput';
import Button from '../Forms/Button';

// firebase
import { auth, handleUserProfile } from '../../Firebase/utils';

import './styles.scss';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: [],
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const {
      displayName, email, password, confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      const err = ['Passwords Don\'t match'];
      this.setState({ errors: err });
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await handleUserProfile(user, { displayName });

      this.setState({
        ...initialState,
      });
    } catch (error) {
      // console.log(error);
    }
  }

  render() {
    const {
      displayName, email, password, confirmPassword, errors,
    } = this.state;
    return (
      <div className="signup">
        <div className="wrap">
          <h2>SignUp</h2>
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
          <div className="formWrap">
            <form onSubmit={this.handleFormSubmit}>
              <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} placeholder="Full Name" />
              <FormInput type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email Address" />
              <FormInput type="password" name="password" value={password} onChange={this.handleChange} placeholder="********" />
              <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} placeholder="********" />
              <Button type="submit">Register</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;