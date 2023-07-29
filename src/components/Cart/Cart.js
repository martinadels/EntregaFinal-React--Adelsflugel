import React, { useContext } from 'react';
import { useCartContext } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, clearCart, getTotal } = useContext(useCartContext);

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.brand}</p>
              <p>Precio unitario: {item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: {item.price * item.quantity}</p>
            </div>
          ))}
          <p>Total de la orden: {getTotal()}</p>
          <button onClick={clearCart}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
