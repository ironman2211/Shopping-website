import { combineReducers } from 'redux';
import userReduser from './user/user-reduser.js';
import cartReduser from './cart/cart-reduser.js';
export default combineReducers({
  user: userReduser,
  cart: cartReduser,
});
