import {all,call} from 'redux-saga/effects'
import { fetchCollectionStart } from './shop/shop-saga'
import userSaga from './user/user.saga'
import {cartSagas} from './cart/cart-sagas'
export default function* rootSaga(){
    yield all([call(fetchCollectionStart),call(userSaga),call(cartSagas)])
}