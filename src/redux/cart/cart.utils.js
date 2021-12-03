export const addIteamToCart = (cartItems, cartItemsToAdd) => {
  const existingIteams = cartItems.find(
    cartItem => cartItem.id === cartItemsToAdd.id
  );
  if (existingIteams) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};
