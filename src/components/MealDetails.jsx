import { useEffect } from 'react';

function MealDetails({ item, onClose, onAddToCart }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="meal-details-overlay" onClick={onClose}>
      <div className="meal-details" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={item.photoName} alt={item.name} className="meal-details-img" />
        <div className="meal-details-content">
          <h2>{item.name}</h2>
          <p className="ingredients">{item.ingredients}</p>
          <div className="meal-details-info">
            <div className="info-group">
              <span className="label">Price</span>
              <span className="value">${item.price}</span>
            </div>
            <div className="info-group">
              <span className="label">Rating</span>
              <span className="value">⭐ {item.rating}</span>
            </div>
            <div className="info-group">
              <span className="label">Calories</span>
              <span className="value">🔥 {item.calories} cal</span>
            </div>
            {item.spicy && (
              <div className="info-group">
                <span className="label">Spice Level</span>
                <span className="value">🌶️ Spicy</span>
              </div>
            )}
          </div>
          {!item.soldOut ? (
            <button 
              className="add-to-cart-btn"
              onClick={() => onAddToCart(item)}
            >
              Add to Cart
            </button>
          ) : (
            <p className="sold-out">Sorry, this item is currently sold out</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MealDetails; 