import CartType from './cart-type';

export const togglecarthidden = () => ({
  type: CartType.TOGGLE_CART_HIDDEN,
});

export const additem = item => ({
  type: CartType.add_item,
  payload: item,
});
export const clearitemfromcart = item => ({
  type: CartType.CLEAR_ITEM_FROMCART,
  payload: item,
});
export const removeItem = item => ({
  type: CartType.REMOVE_ITEM,
  payload: item,
});
