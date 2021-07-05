/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FormInput = ({ handleChange, ...otherProps }) => (
  <div className="formRow">
    <input className="formInput" onChange={handleChange} {...otherProps} />
  </div>
);

FormInput.propTypes = {
  handleChange: PropTypes.func,
};

export default FormInput;
