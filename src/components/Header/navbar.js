import React from 'react';

const navbar = () => (
  <div>
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
  </div>
);

export default navbar;
