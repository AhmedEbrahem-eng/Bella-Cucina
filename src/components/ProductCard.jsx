import { useState } from 'react';

function ProductCard({ item, onAddToCart, onViewDetails }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!item.soldOut) {
      onViewDetails(item);
    }
  };

  return (
    <li 
      className={`item ${item.soldOut ? "sold-out" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ cursor: item.soldOut ? 'not-allowed' : 'pointer' }}
    >
      <img src={item.photoName} alt={item.name} />
      <div className="item-info">
        <h3>{item.name}</h3>
        <p>{item.ingredients}</p>
        <div className="item-details">
          <span className="price">${item.price}</span>
          <span className="rating">⭐ {item.rating}</span>
          <span className="calories">🔥 {item.calories} cal</span>
          {item.spicy && <span className="spicy">🌶️ Spicy</span>}
        </div>
        {!item.soldOut && (
          <button 
            className={isHovered ? 'hover' : ''}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(item);
            }}
          >
            Quick Add
          </button>
        )}
      </div>
    </li>
  );
}

export default ProductCard; 