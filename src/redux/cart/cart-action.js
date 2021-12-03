import CartType from './cart-type';

export const togglecarthidden = () => ({
  type: CartType.TOGGLE_CART_HIDDEN,
});

export const additem = item => ({
  type: CartType.add_item,
  payload: item,
});
