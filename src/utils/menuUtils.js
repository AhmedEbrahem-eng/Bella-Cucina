export const filterAndSortItems = (menuItems, searchTerm, sortBy, activeCategory) => {
  const allItems = menuItems.flatMap(category => category.items);
  
  return allItems
    .filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "all" || 
        menuItems.find(cat => cat.items.includes(item))?.category === activeCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
}; 