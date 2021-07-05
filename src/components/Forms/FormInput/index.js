/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="formRow">
    {
                label && (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label>
                  {' '}
                  {label}
                  {' '}
                </label>
                )
            }

    <input className="formInput" onChange={handleChange} {...otherProps} />
  </div>
);

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
};

export default FormInput;
