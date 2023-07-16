import React from 'react';
import './styles.scss';

const Footer = () => (
  <footer className="footer container-fluid">
    <div className="wrap">
      <div className="top-footer col-12 row">
        <div className="col-12 col-md-5">
          <h2>Subscribe to our newsletter</h2>
          <p>
            Subscribe to get more useful information about us and to get you 15%
            off your next purchase
          </p>
        </div>
        <div className="col-12 col-md-7">
          <form className="row">
            <div className="form-group col-12 col-md-8">
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-12 col-md-4">
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="middle-footer col-12 row">
        <div className="contact_information col-12 col-md-2">
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
        <div className="contact_information col-12 col-md-4">
          <h3 className="footerTitle">INFORMATION</h3>
          <ul>
            <li>About Fashionable Original</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="contact_information col-12 col-md-4">
          <h3 className="footerTitle">QUICK LINKS</h3>
          <ul>
            <li>Wishlist</li>
            <li>Checkout</li>
            <li>Cart</li>
          </ul>
        </div>
        <div className="contact_information">
          <p>
            <i className="fa-solid fa-location-dot" /> 37 Glenian Road, Fourways
          </p>
          <p>
            <i className="fa-solid fa-phone" /> +27 64 122 6401
          </p>
          <p>
            <i className="fa-regular fa-envelope" /> claytonsiby@gmail.com
          </p>
        </div>
      </div>
      <div className="bottom-footer col-12 row">
        <div className="col-6 d-flex justify-content-start">
          <p>COPYWRIGHT &copy; 2022 F.Original </p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <p>ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
