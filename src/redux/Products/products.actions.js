import productsTypes from './products.types';

// eslint-disable-next-line import/prefer-default-export
export const addProductStart = (product) => ({
  type: productsTypes.ADD_NEW_PRODUCT_START,
  payload: product,
});

export const fetchProductsStart = () => ({
  type: productsTypes.FETCH_PRODUCTS_START,
});

export const setProducts = (product) => ({
  type: productsTypes.SET_PRODUCTS,
  payload: product,
});
