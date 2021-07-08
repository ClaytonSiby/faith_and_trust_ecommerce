import { all, call } from 'redux-saga/effects';
import userSagas from './User/user.sagas';

// rootSaga generator function to combine all sagas for the application.
export default function* rootSaga() {
  yield all([call(userSagas)]);
}
