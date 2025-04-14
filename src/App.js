import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MealDetails from "./components/MealDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import { menuItems } from "./data/menuItems";
import { addToCart, removeFromCart, updateQuantity } from "./utils/cartUtils";
import { filterAndSortItems } from "./utils/menuUtils";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState("menu");

  const filteredItems = filterAndSortItems(menuItems, searchTerm, sortBy, activeCategory);

  const handleAddToCart = (item) => {
    setCart(addToCart(cart, item));
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(removeFromCart(cart, itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCart(updateQuantity(cart, itemId, newQuantity));
  };

  const viewDetails = (item) => {
    setSelectedItem(item);
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return (
          <>
            <h2>Our Menu</h2>
            <ul className="items">
              {filteredItems.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  onAddToCart={handleAddToCart}
                  onViewDetails={viewDetails}
                />
              ))}
            </ul>
          </>
        );
    }
  };

  return (
    <div className="container">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortBy={sortBy}
        onSortChange={setSortBy}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      <main>
        {renderPage()}
      </main>

      <Cart
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      {selectedItem && (
        <MealDetails
          item={selectedItem}
          onClose={closeDetails}
          onAddToCart={handleAddToCart}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
