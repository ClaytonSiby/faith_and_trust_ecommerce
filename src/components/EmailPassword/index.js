/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AuthWrapper from '../AuthWrapper';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';

// firebase
import { auth } from '../../Firebase/utils';
import './styles.scss';

const initialState = {
  email: '',
  errors: [],
};
class EmailPassword extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email } = this.state;

      // url to send user when they have reset their passord
      const config = {
        url: 'http://localhost:3000/login',
      };

      await auth.sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push('/login');
        })
        .catch(() => {
          const err = ['email not found! Please try again.'];

          this.setState({
            errors: err,
          });
        });
    } catch (error) {
      // console.log(error)
    }
  }

  render() {
    const { email, errors } = this.state;
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
          <form onSubmit={this.handleSubmit}>
            <FormInput type="email" name="email" value={email} placeholder="Email Address" onChange={this.handleChange} />
            <Button type="submit">Email Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default withRouter(EmailPassword);
