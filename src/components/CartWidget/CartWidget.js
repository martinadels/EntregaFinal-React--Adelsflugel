import React from 'react';
import { useCartContext } from '../../context/CartContext';
import cartIcon from '../../assets/cart.png';
import './CartWidget.css';

const CartWidget = () => {
  const { cartItems } = useCartContext();

  // Calcular la cantidad total de productos en el carrito
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget-container">
      <div className="cart-widget">
        {totalItems > 0 && <span className="cart-item-count">{totalItems}</span>}
        <img src={cartIcon} alt="Carrito" className="cart-icon" />
      </div>
    </div>
  );
};

export default CartWidget;
