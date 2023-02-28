import React, { useEffect, useState } from 'react';
import { GET_ALL_CATEGORIES, GET_ALL_PRODUCTS } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import Categories from '../Categories';
import Products from '../Products';
import './Main.css';

function Main() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getFilteredProducts = () => {
    if (selectedCategory === -1) {
      return products;
    }
    return products.filter((product) => product.categoryId === selectedCategory);
  };

  useEffect(() => {
    makeRequest(GET_ALL_CATEGORIES).then((response) => setCategories(response));
    makeRequest(GET_ALL_PRODUCTS).then((response) => setProducts(response));
  }, []);

  useEffect(() => {
    setFilteredProducts(getFilteredProducts());
  }, [selectedCategory, products]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(Number(e.target.value));
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    if (searchValue === '') {
      setFilteredProducts(getFilteredProducts());
    } else {
      setFilteredProducts(filteredProducts.filter((product) => (
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      )));
    }
  };

  const handleSort = (e) => {
    const sortValue = e.target.value;
    if (sortValue === 'price') {
      const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
      setFilteredProducts(sorted);
    } else if (sortValue === 'name') {
      const sorted = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
      setFilteredProducts(sorted);
    }
  };

  return (
    <div className="main-body">
      <div className="sidebar">
        <Categories categories={categories} handleChange={handleCategoryChange} />

      </div>
      <div className="products">
        <Products handleSearch={handleSearch} products={filteredProducts} handleSort={handleSort} />
      </div>
    </div>
  );
}

export default Main;
