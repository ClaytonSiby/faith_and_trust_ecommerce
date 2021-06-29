import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const HomepageLayout = ({ children }) => (
  <div className="fullHeight">
    <Header />
    { children }
  </div>
);

HomepageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HomepageLayout;
