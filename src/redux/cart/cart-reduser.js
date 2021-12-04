import CartType from './cart-type';
import { addIteamToCart, removeItemFromcart } from './cart.utils';
const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartType.add_item: {
      return {
        ...state,
        items: addIteamToCart(state.items, action.payload),
      };
    }
    case CartType.CLEAR_ITEM_FROMCART: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    }
    case CartType.REMOVE_ITEM: {
      return {
        ...state,
        items: removeItemFromcart(state.items, action.payload),
      };
    }

    default:
      return state;
  }
};
export default cartReduser;
