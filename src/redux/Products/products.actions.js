import productsTypes from './products.types';

// eslint-disable-next-line import/prefer-default-export
export const addProductStart = (product) => ({
  type: productsTypes.ADD_NEW_PRODUCT_START,
  payload: product,
});
