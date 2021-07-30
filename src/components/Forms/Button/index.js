import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ children, ...otherProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <button className="button my-2" type="button" {...otherProps}>
    { children }
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
