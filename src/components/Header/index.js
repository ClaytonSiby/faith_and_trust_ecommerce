/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutUserStart } from '../../redux/User/user.actions';
import Logo from '../../assets/logo.png';
import './styles.scss';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="faithNTrust" />
          </Link>
        </div>

        <div className="callToActions">
          {
            currentUser && (
              <ul>
                <li>
                  <Link to="/dashboard">My Account</Link>
                </li>
                <li><span onClick={() => signOut()}>LOGOUT</span></li>
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

export default Header;
