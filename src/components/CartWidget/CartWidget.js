import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  // No necesitamos mostrar el ícono del carrito aquí, ya que lo estamos mostrando en el NavBar
  // Eliminamos el código relacionado al ícono del carrito y la cantidad
  return (
    <div className="cart-widget">
      {/* Aquí puede ir otro contenido del CartWidget si es necesario */}
    </div>
  );
};

export default CartWidget;
