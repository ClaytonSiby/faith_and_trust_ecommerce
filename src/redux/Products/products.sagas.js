import {
  takeLatest, all, call,
} from 'redux-saga/effects';
import { auth } from '../../Firebase/utils';
import { handleAddProduct } from './products.helper';
import productsTypes from './products.types';

export function* addProduct({
  payload: {
    productCategory, productName, productThumbnail, productPrice,
  },
}) {
  try {
    const timestamp = new Date();
    yield handleAddProduct({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp,
    });
  } catch (error) {
    // console.log(error);
  }
}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export default function* productsSagas() {
  yield all([call(onAddProductStart)]);
}
