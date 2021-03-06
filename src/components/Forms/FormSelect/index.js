/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const FormSelect = ({
  options, defaultValue, handleChange, label, ...otherProps
}) => {
  if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <div className="formRow">
      {label && (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label>
          {label}
        </label>
      )}

      <select className="formSelect" value={defaultValue} onChange={handleChange} {...otherProps}>
        {options.map((option) => {
          const { value, name } = option;

          return (
            <option key={Math.random() * 10} value={value}>{name}</option>
          );
        })}
      </select>
    </div>
  );
};

FormSelect.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default FormSelect;
