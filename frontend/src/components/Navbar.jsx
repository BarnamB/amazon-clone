export default function Navbar({ cartCount, searchQuery, setSearchQuery, setSelectedCategory }) {
  return (
    <>
      
      <nav className="navbar">
        <div className="nav-logo">amazon</div>
        
        <div className="nav-search">
          <input 
            type="text" 
            placeholder="Search Amazon.in" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <div className="nav-search-icon">🔍</div>
        </div>

        <div className="nav-tools">
          <div>
            <div className="nav-link-line-1">Hello, sign in</div>
            <div className="nav-link-line-2">Account & Lists</div>
          </div>
          <div>
            <div className="nav-link-line-1">Returns</div>
            <div className="nav-link-line-2">& Orders</div>
          </div>
          <div className="nav-cart">
            🛒 Cart {cartCount > 0 && `(${cartCount})`}
          </div>
        </div>
      </nav>

      {/* Subnav */}
      <div className="subnav" style={{ cursor: "pointer" }}>
        <span onClick={() => setSelectedCategory("All")}>☰ All</span>
        <span onClick={() => setSelectedCategory("Accessories")}>Accessories</span>
        <span onClick={() => setSelectedCategory("Electronics")}>Electronics</span>
        <span onClick={() => setSelectedCategory("Mobiles")}>Mobiles</span>
      </div>
    </>
  );
}