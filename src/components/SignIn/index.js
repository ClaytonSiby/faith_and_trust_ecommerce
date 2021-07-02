import React, { Component } from 'react';
import Button from '../Forms/Button';
import FormInput from '../Forms/FromInput';
import { signInWithGoogle, auth } from '../../Firebase/utils';
import './styles.scss';

const initialState = {
  email: '',
  password: '',
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        ...initialState,
      });
    } catch (error) {
      // console.log(error);
    }
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="signin">
        <div className="wrap">
          <h2>Login</h2>

          <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
              <FormInput type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email Address" />
              <FormInput type="password" name="password" value={password} onChange={this.handleChange} placeholder="*******" />
              <Button type="submit">Login</Button>
              <div className="socialSignin">

                <Button type="button" onClick={signInWithGoogle}>Google SignIn</Button>

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
