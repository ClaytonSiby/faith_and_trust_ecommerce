/* eslint-disable react/jsx-props-no-spreading */

import React, { Component } from 'react';
import AuthWrapper from '../AuthWrapper';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
import './styles.scss';

const initialState = {
  email: '',
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
  }

  render() {
    const { email } = this.state;
    const configAuthWrapper = {
      headline: 'Email Password',
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          <form onSubmit={this.handleSubmit}>
            <FormInput type="email" name="email" value={email} placeholder="Email Address" onChange={this.handleChange} />
            <Button type="submit">Email Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default EmailPassword;
