import {
  takeLatest, put, all, call,
} from 'redux-saga/effects';
import ordersTypes from './orders.types';
import { handleSaveOrder } from './orders.helpers';
import { auth } from '../../Firebase/utils';
import { clearCart } from '../Cart/cart.actions';

export function* saveOrder({ payload }) {
  try {
    const timestamps = new Date();
    yield handleSaveOrder({
      ...payload,
      // fetch individual orders with a user.
      orderUserID: auth.currentUser.uid,
      orderCreatedDate: timestamps,
    });

    yield put(clearCart());
  } catch (err) {
    // console.log(err);
  }
}

export function* onSaveOrderHistoryStart() {
  yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder);
}

export default function* ordersSagas() {
  yield all([
    call(onSaveOrderHistoryStart),
  ]);
}
