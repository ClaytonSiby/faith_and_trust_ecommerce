/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
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
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src="" alt="Crotchetsy" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarNav"
            className="navbar-toggler-right"
          >
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
              <Nav.Item>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/search" className="nav-link">
                  Shop
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </Nav.Item>
            </Nav>
            <Nav className="ml-auto">
              {currentUser && [
                <Nav.Item key={0}>
                  <Link to="/cart" className="nav-link">
                    <i className="fa-solid fa-cart-shopping" />
                    (
                    {totalNumberOfCartItems}
                    )
                  </Link>
                </Nav.Item>,
                <Nav.Item key={1}>
                  <Link to="/dashboard" className="nav-link">
                    My Account
                  </Link>
                </Nav.Item>,
                <Nav.Item key={2}>
                  <Link onClick={() => signOut()} className="nav-link">
                    SignOut
                  </Link>
                </Nav.Item>,
              ]}
              {!currentUser && [
                <Nav.Item key={3}>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </Nav.Item>,
                <Nav.Item key={4}>
                  <Link to="/registration" className="nav-link">
                    Register
                  </Link>
                </Nav.Item>,
              ]}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
