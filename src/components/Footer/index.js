import React from 'react';
import './styles.scss';

const Footer = () => (
  <footer className="footer container-fluid">
    <div className="wrap">
      <div className="top-footer col-12 row my-3 p-3 py-4">
        <div className="col-12 col-md-1" />
        <div className="col-12 col-md-5">
          <h3>Our Newsletter</h3>
          <p>
            Subscribe to get more useful information about us and to get
            you&nbsp;
            <span className="text-danger">15% discount</span>
            &nbsp; off your next purchase.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <form className="row">
            <div className="form-group col-12 col-md-8">
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-12 col-md-4">
              <button type="submit" className="btn btn-danger">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="middle-footer col-12 row my-3 py-3">
        <div className="contact_information col-12 col-md-3">
          <div className="site-moto">
            <h3 className="footer-title text-danger">Crotchetsy</h3>
            <p className="moto-text">
              We are at the heart of fashion, bringing that beauty to
              enlightment!
            </p>
          </div>
          <div>
            <span className="socialIcon">
              <a href="/">
                <i className="fa-brands fa-facebook" />
              </a>
            </span>
            <span className="socialIcon">
              <a href="/">
                <i className="fa-brands fa-youtube" />
              </a>
            </span>
            <span className="socialIcon">
              <a href="/">
                <i className="fa-brands fa-instagram" />
              </a>
            </span>
            <span className="socialIcon">
              <a href="/">
                <i className="fa-brands fa-twitter" />
              </a>
            </span>
          </div>
        </div>
        <div className="contact_information col-12 col-md-3">
          <h4 className="footer-title text-danger">INFORMATION</h4>
          <ul>
            <li>About Crotchetsy</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="contact_information col-12 col-md-3">
          <h4 className="footer-title text-danger">QUICK LINKS</h4>
          <ul>
            <li>Wishlist</li>
            <li>Checkout</li>
            <li>Cart</li>
          </ul>
        </div>
        <div className="contact_information col-12 col-md-3">
          <h4 className="footer-title text-danger">CONTACT US</h4>
          <ul>
            <li>
              <span className="locationIcon">
                <i className="fa-solid fa-location-dot" />
              </span>
              37 Glenian Road, Fourways
            </li>
            <li>
              <span className="phoneIcon">
                <i className="fa-solid fa-phone" />
              </span>
              +27 64 122 6401
            </li>
            <li>
              <span className="envelopeIcon">
                <i className="fa-regular fa-envelope" />
              </span>
              claytonsiby@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer col-12 row mt-2">
        <div className="col-6 d-flex justify-content-start p-0">
          <p>COPYWRIGHT &copy; 2023. Crotchetsy </p>
        </div>
        <div className="col-6 d-flex justify-content-end p-0">
          <p>ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
