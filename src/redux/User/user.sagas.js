/* eslint-disable no-unused-vars */
import {
  takeLatest, call, all, put,
} from 'redux-saga/effects';
import { auth, handleUserProfile, GoogleProvider } from '../../Firebase/utils';
import userTypes from './user.types';
import { signInSuccess } from './user.actions';

export function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(handleUserProfile, { userAuth: user });
    const snapshot = yield userRef.get();
    // dispatch and updat the redux store
    yield put(signInSuccess({
      id: snapshot.id,
      ...snapshot.data(),
    }));
  } catch (error) {
    // console.log(error)
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    // console.log(error);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSagas() {
  yield all([call(onEmailSignInStart)]);
}
