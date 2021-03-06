import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddle from 'redux-saga';
import persistReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddle();

const middlewares = [logger, thunk, sagaMiddleware];

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistReducer, composeEnhancers(
  applyMiddleware(...middlewares),
));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {
  store,
  persistor,
};
