import { useState } from 'react';
import OrderConfirmation from './OrderConfirmation';

function Cart({ cart, onRemoveItem, onUpdateQuantity }) {
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleQuantityChange = (itemId, change) => {
    const item = cart.find(item => item.id === itemId);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change);
      onUpdateQuantity(itemId, newQuantity);
    }
  };

  const handlePlaceOrder = () => {
    setShowOrderConfirmation(true);
  };

  const handleConfirmOrder = (orderData) => {
    console.log('Order placed:', orderData);
    setLastOrder(orderData);
    setOrderSuccess(true);
    setShowOrderConfirmation(false);
    cart.forEach(item => onRemoveItem(item.id));
  };

  if (orderSuccess) {
    return (
      <div className="cart">
        <div className="order-success">
          <h2>Order Confirmed! 🎉</h2>
          <p>Thank you for your order!</p>
          <div className="order-details">
            <p>Order ID: {lastOrder.orderId}</p>
            <p>Estimated delivery time: 30-45 minutes</p>
            <p>We'll send updates to: {lastOrder.phone}</p>
          </div>
          <button 
            className="new-order-btn"
            onClick={() => setOrderSuccess(false)}
          >
            Place New Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Order</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="remove-btn"
                  aria-label="Remove item"
                >
                  ❌
                </button>
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.name}</span>
                  <div className="cart-item-quantity">
                    <button 
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <span className="cart-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <button className="order-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      )}

      {showOrderConfirmation && (
        <OrderConfirmation
          cart={cart}
          total={getTotalPrice()}
          onClose={() => setShowOrderConfirmation(false)}
          onConfirm={handleConfirmOrder}
        />
      )}
    </div>
  );
}

export default Cart; 