/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';
// import Logo from '../../assets/logo.png';
import './styles.scss';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumberOfCartItems: selectCartItemsCount(state),
});

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser, totalNumberOfCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header border-bottom">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src="" alt="Crotchetsy" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Shop</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">
          <ul>
            {currentUser && [
              <li key={0}>
                <Link to="/cart">
                  <i className="fa-solid fa-cart-shopping" />
                  (
                  {totalNumberOfCartItems}
                  )
                </Link>
              </li>,
              <li key={1}>
                <Link to="/dashboard">My Account</Link>
              </li>,
              <li key={2}>
                <span onClick={() => signOut()}>LOGOUT</span>
              </li>,
            ]}
            {!currentUser && [
              <li key={3}>
                <Link to="/registration">Register</Link>
              </li>,
              <li key={4}>
                <Link to="/login">Login</Link>
              </li>,
            ]}
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
