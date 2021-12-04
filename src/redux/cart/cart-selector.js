import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.items);
export const selectHidden = createSelector([selectCart], cart => cart.hidden);
export const selctCartItemsCount = createSelector([selectCartItems], items =>
  items.reduce((acc, item) => acc + item.quantity, 0)
);
export const selectTotal = createSelector([selectCartItems], items =>
  items.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
