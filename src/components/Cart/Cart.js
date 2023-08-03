// Cart.js

import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, clearCart, getTotalPrice } = useCartContext();

  // Usamos un objeto para realizar el seguimiento de los productos y sus cantidades
  const cartProducts = cartItems.reduce((productsObj, currentItem) => {
    if (!productsObj[currentItem.id]) {
      // Si el producto no está en el objeto, lo agregamos con su cantidad actual
      productsObj[currentItem.id] = { ...currentItem };
    } else {
      // Si ya existe, sumamos la cantidad actual al producto existente
      productsObj[currentItem.id].quantity += currentItem.quantity;
    }
    return productsObj;
  }, {});

  // Convertimos el objeto de productos en un array para mostrarlo en JSX
  const productsArray = Object.values(cartProducts);

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
          {productsArray.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.brand} className="cart-item-image" />
              <span>{item.brand}</span>
              <span>{item.quantity}</span>
              <span>
                {item.price} x {item.quantity} = {item.price * item.quantity}
              </span>
            </div>
          ))}
          <p className="cart-total">Total de la orden: {getTotalPrice()}</p>
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
