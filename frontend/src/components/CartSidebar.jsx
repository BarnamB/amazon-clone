export default function CartSidebar({ cart }) {
  
  let cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal = cartTotal + cart[i].price;
  }

  return (
    <div className="cart-section">
      <div className="cart-subtotal">
        <h3>Subtotal ({cart.length} items):</h3>
        <strong>${cartTotal.toFixed(2)}</strong>
      </div>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <span>{item.name}</span>
            <strong>${item.price}</strong>
          </div>
        ))
      )}
      
      {cart.length > 0 && (
        <button className="checkout-btn">Proceed to checkout</button>
      )}
    </div>
  );
}