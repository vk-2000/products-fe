import React from 'react';
import './Dropdown.css';
import PropTypes from 'prop-types';

function Dropdown({ label, options, handleChange }) {
  return (
    <div>
      <label htmlFor="select">
        {label}
        <select data-testid="select" id="select" onChange={(e) => handleChange(e)}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    // id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
};
