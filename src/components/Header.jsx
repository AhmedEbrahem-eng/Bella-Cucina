function Header({ 
  searchTerm, 
  onSearchChange, 
  sortBy, 
  onSortChange, 
  activeCategory, 
  onCategoryChange,
  currentPage,
  onPageChange
}) {
  return (
    <header>
      <h1>Bella Cucina</h1>
      <p className="subtitle">Authentic Italian Cuisine</p>
      
      <nav className="main-nav">
        <button 
          className={`nav-btn ${currentPage === 'menu' ? 'active' : ''}`}
          onClick={() => onPageChange('menu')}
        >
          Menu
        </button>
        <button 
          className={`nav-btn ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => onPageChange('about')}
        >
          About Us
        </button>
        <button 
          className={`nav-btn ${currentPage === 'contact' ? 'active' : ''}`}
          onClick={() => onPageChange('contact')}
        >
          Contact
        </button>
      </nav>

      {currentPage === 'menu' && (
        <>
          <div className="controls">
            <input
              type="text"
              placeholder="Search menu..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
              <option value="name">Sort by name</option>
              <option value="price">Sort by price</option>
              <option value="rating">Sort by rating</option>
            </select>
          </div>

          <div className="categories">
            <button
              className={activeCategory === "all" ? "active" : ""}
              onClick={() => onCategoryChange("all")}
            >
              All
            </button>
            <button
              className={activeCategory === "pizza" ? "active" : ""}
              onClick={() => onCategoryChange("pizza")}
            >
              Pizza
            </button>
            <button
              className={activeCategory === "pasta" ? "active" : ""}
              onClick={() => onCategoryChange("pasta")}
            >
              Pasta
            </button>
            <button
              className={activeCategory === "salad" ? "active" : ""}
              onClick={() => onCategoryChange("salad")}
            >
              Salads
            </button>
            <button
              className={activeCategory === "dessert" ? "active" : ""}
              onClick={() => onCategoryChange("dessert")}
            >
              Desserts
            </button>
          </div>
        </>
      )}
    </header>
  );
}

export default Header; 