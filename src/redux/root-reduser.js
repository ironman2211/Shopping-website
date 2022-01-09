import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReduser from './user/user-reduser.js';
import cartReduser from './cart/cart-reduser.js';
import storage from 'redux-persist/lib/storage';
import dirctoryReduser from './directory/directory.reduser';
import shopReducer from './shop/shop-reducer';
const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
};
const rootReduse = combineReducers({
  user: userReduser,
  cart: cartReduser,
  directory: dirctoryReduser,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReduse);
