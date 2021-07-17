import productsTypes from './products.types';

// eslint-disable-next-line import/prefer-default-export
export const addProductStart = (product) => ({
  type: productsTypes.ADD_NEW_PRODUCT_START,
  payload: product,
});

export const fetchProductsStart = (filters = {}) => ({
  type: productsTypes.FETCH_PRODUCTS_START,
  payload: filters,
});

export const setProducts = (product) => ({
  type: productsTypes.SET_PRODUCTS,
  payload: product,
});

export const deleteProductStart = (productID) => ({
  type: productsTypes.DELETE_PRODUCT_START,
  payload: productID,
});

export const fetchProductStart = (productID) => ({
  type: productsTypes.FETCH_PRODUCT_START,
  payload: productID,
});

export const setProduct = (product) => ({
  type: productsTypes.SET_PRODUCT,
  payload: product,
});
