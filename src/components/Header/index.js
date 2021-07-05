/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
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
                <li>
                  <Link to="/dashboard">My Account</Link>
                </li>
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Header);
