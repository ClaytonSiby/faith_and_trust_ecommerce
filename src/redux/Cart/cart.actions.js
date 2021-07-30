/* eslint-disable import/prefer-default-export */
import cartTypes from './cart.types';

export const addProduct = (nextCartItem) => ({
  type: cartTypes.ADD_TO_CART,
  payload: nextCartItem,
});

export const removeCartItem = ({ cartItem }) => ({
  type: cartTypes.REMOVE_CART_ITEM,
  payload: cartItem,
});
