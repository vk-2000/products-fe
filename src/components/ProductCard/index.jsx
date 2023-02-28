import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="card-body">
      <div className="card-img-container">
        <img src={product.imageUrl} alt={product.name} className="card-img" />
      </div>
      <div className="card-title">
        {product.name}
      </div>
      <div className="card-description">
        {product.description}
      </div>
      <div className="card-price">
        {product.price}
      </div>

    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
