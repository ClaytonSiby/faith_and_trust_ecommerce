import ordersTypes from './orders.types';

export const saveOrderHistory = (order) => ({
  type: ordersTypes.SAVE_ORDER_HISTORY_START,
  payload: order,
});

export const getUserHistory = (uid) => ({
  type: ordersTypes.GET_USER_ORDER_HISTORY_START,
  payload: uid,
});

export const setUserOrderHistory = (_history) => ({
  type: ordersTypes.SET_USER_ORDER_HISTORY,
  payload: _history,
});
