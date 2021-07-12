import {
  takeLatest, put, all, call,
} from 'redux-saga/effects';
import { auth } from '../../Firebase/utils';
import { handleAddProduct, handleFetchProducts } from './products.helper';
import productsTypes from './products.types';
import { setProducts } from './products.actions';

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

export function* fetchProducts() {
  try {
    // yield will make an async action and wait for the response.
    const products = yield handleFetchProducts();

    yield put(setProducts(products));
  } catch (error) {
    // console.log(error);
  }
}

export function* onFetchProductStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export default function* productsSagas() {
  yield all([call(onAddProductStart), call(onFetchProductStart)]);
}
