/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectCartData = (state) => state.cartData;

export const selectCartItems = createSelector(
  [selectCartData],
  (cartData) => cartData.cartItems,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0),
);
