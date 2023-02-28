import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import ProductCard from '../ProductCard';
import './Products.css';

function Products({ products, handleSearch, handleSort }) {
  const sortOptions = [{ value: 'name', label: 'Name' }, { value: 'price', label: 'Price' }];
  return (
    <div>
      <div className="products-header">
        <div className="product-search">
          <input placeholder="search" onChange={(e) => handleSearch(e)} type="text" />
        </div>
        <Dropdown label="Sort By" handleChange={handleSort} options={sortOptions} />
      </div>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    categoryId: PropTypes.number.isRequired,
  })).isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
};
