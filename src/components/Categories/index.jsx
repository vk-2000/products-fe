import React from 'react';
import './Categories.css';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';

function Categories({ categories, handleChange }) {
  const dropdownOptions = [{ value: -1, label: 'All' }, ...categories.map((category) => (
    { value: category.id, label: category.name }
  ))];
  return (
    <div>
      <Dropdown label="Category" options={dropdownOptions} handleChange={handleChange} />
    </div>
  );
}

export default Categories;

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
};
