export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-image-box">Image</div>
      <div className="product-info">
        <h4>{product.name}</h4>
        <p style={{fontSize: "12px", color: "gray"}}>{product.category}</p>
        <div className="product-price">
          <span>$</span><span>{product.price}</span>
        </div>
      </div>
      <button 
        className="add-to-cart-btn" 
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
}