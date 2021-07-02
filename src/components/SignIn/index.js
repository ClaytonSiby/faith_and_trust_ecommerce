import React from 'react';
import Button from '../Forms/Button';
import './styles.scss';

const SignIn = () => (
  <div className="signin">
    <div className="wrap">
      <h2>Login</h2>

      <div className="formWrap">
        <form>
          <div className="socialSignin">
            <div className="row">
              <Button>
                Google SignIn
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default SignIn;
