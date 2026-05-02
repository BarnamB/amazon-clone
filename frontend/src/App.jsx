import { useState, useEffect } from 'react';
import './App.css';


import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';

function App() {
  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log("Error fetching products", error));
  }, []);

  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  
  return (
    <div>
      
      <Navbar 
        cartCount={cart.length} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="main-container">
        
        {/* Products Section */}
        <div className="products-section">
          <h2>{selectedCategory} Results {searchQuery && `for "${searchQuery}"`}</h2>
          
          <div className="products-grid">
            {filteredProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              filteredProducts.map(product => (
               
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  addToCart={addToCart} 
                />
              ))
            )}
          </div>
        </div>

        
        <CartSidebar cart={cart} />

      </div>
    </div>
  );
}

export default App;