import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, clearCart, removeItem } = useCartContext();



  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          <div className="cart-item cart-item-header">
            <span>Imagen</span>
            <span>Nombre del producto</span>
            <span>Cantidad total</span>
            <span>Precio unitario y total</span>
          </div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.brand} className="cart-item-image" />
              <span>{item.brand}</span>
              <span>{item.quantity}</span>
              <span>
                {item.price} x {item.quantity} = {item.price * item.quantity}
              </span>
              <button type='button' className='{styles.eliminar}' onClick={() => removeItem (item.id)}>Eliminar</button>
            </div>

          ))}
          <div className="cart-buttons">
            <button onClick={clearCart}>Vaciar carrito</button>
            <Link to="/checkout">
              <button>Finalizar compra</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
