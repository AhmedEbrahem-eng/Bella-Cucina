import { useState } from 'react';

function OrderConfirmation({ cart, total, onClose, onConfirm }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cash'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({
      ...formData,
      items: cart,
      total,
      orderTime: new Date().toISOString(),
      orderId: `ORDER-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Complete Your Order</h2>
        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Delivery Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="cash">Cash on Delivery</option>
              <option value="card">Card</option>
            </select>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <ul>
              {cart.map(item => (
                <li key={item.id}>
                  {item.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <div className="total">
              <strong>Total:</strong> ${total.toFixed(2)}
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="confirm-btn">
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderConfirmation; 