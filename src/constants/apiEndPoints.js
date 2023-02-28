export const BACKEND_URL = 'http://localhost:8080';

export const GET_ALL_PRODUCTS = {
  url: '/products',
  method: 'GET',
};
export const GET_ALL_CATEGORIES = {
  url: '/categories',
  method: 'GET',
};
export const GET_PRODUCT_BY_CATEGORY = (categoryId) => ({
  url: `/products?categoryId=${categoryId}`,
  method: 'GET',
});
