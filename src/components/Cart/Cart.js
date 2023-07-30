import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, clearCart, getTotalPrice } = useCartContext();

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p className="item-brand">{item.brand}</p>
              <p>Precio unitario: {item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: {item.price * item.quantity}</p>
            </div>
          ))}
          <p className="cart-total">Total de la orden: {getTotalPrice()}</p>
          <button onClick={clearCart}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
