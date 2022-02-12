import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga'
import logger from 'redux-logger';
import rootReducer from './root-reduser';
const sagaMiddlware =createSagaMiddleware();
const middleware = [sagaMiddlware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddlware.run(rootSaga);
export const persistor = persistStore(store);
const functions = { store, persistor };
export default functions;
