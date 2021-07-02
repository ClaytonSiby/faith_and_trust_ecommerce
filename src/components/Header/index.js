/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { auth } from '../../Firebase/utils';
import './styles.scss';

const Header = (props) => {
  const { currentUser } = props;

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src="" alt="faithNTrust" />
          </Link>
        </div>

        <div className="callToActions">
          {
            currentUser && (
              <ul>
                <li><span onClick={() => auth.signOut()}>LOGOUT</span></li>
              </ul>
            )
          }
          {!currentUser && (
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

Header.propTypes = {
  currentUser: PropTypes.string,
};

export default Header;
