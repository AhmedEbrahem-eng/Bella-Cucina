export const addToCart = (cart, item) => {
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    return cart.map(cartItem => 
      cartItem.id === item.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cart, { ...item, quantity: 1 }];
};

export const removeFromCart = (cart, itemId) => {
  return cart.filter((item) => item.id !== itemId);
};

export const updateQuantity = (cart, itemId, newQuantity) => {
  return cart.map(item => 
    item.id === itemId 
      ? { ...item, quantity: newQuantity }
      : item
  );
};

export const getTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}; 