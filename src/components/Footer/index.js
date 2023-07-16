import React from 'react';
import './styles.scss';

const Footer = () => (
  <footer className="footer container-fluid">
    <div className="wrap">
      <div className="top-footer">
        <div>
          <h2>Subscribe to our newsletter</h2>
          <p>
            Subscribe to get more useful information about us and to get you 15%
            off your next purchase
          </p>
        </div>
        <div>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="middle-footer">
        <div className="contact_information">
          <div>
            <h2>Fashionable Original</h2>
            <p>
              We are at the heart of fashion, bringing that beauty to
              enlightment!
            </p>
          </div>
          <div>
            <span className="socialIcon">
              <i className="fa-brands fa-facebook" />
            </span>
            <span className="socialIcon">
              <i className="fa-brands fa-youtube" />
            </span>
            <span className="socialIcon">
              <i className="fa-brands fa-instagram" />
            </span>
            <span className="socialIcon">
              <i className="fa-brands fa-twitter" />
            </span>
          </div>
        </div>
        <div className="contact_information">
          <h3 className="footerTitle">INFORMATION</h3>
          <ul>
            <li>About Fashionable Original</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="contact_information">
          <h3 className="footerTitle">QUICK LINKS</h3>
          <ul>
            <li>Wishlist</li>
            <li>Checkout</li>
            <li>Cart</li>
          </ul>
        </div>
        <div className="contact_information">
          <p>
            <i className="fa-solid fa-location-dot" />
            {' '}
            37 Glenian Road, Fourways
          </p>
          <p>
            <i className="fa-solid fa-phone" />
            {' '}
            +27 64 122 6401
          </p>
          <p>
            <i className="fa-regular fa-envelope" />
            {' '}
            claytonsiby@gmail.com
          </p>
        </div>
      </div>
      <div className="bottom-footer">
        <div>
          <p>COPYWRIGHT &copy; 2022 F.Original </p>
        </div>
        <div>
          <p>ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
