import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';
import { useCartContext } from '../../context/CartContext';
import { db } from "../../services/firebase/firebaseConfig"
import { collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    repeatEmail: '',
  });

  const [orderId, setOrderId] = useState(null);
  const { cartItems, getTotalPrice, clearCart } = useCartContext();



  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderRef = await addDoc(collection(db, 'orders'), {
        ...user,
        cart: cartItems,
        total: getTotalPrice(),
        date: new Date().toISOString(),
      });

      setOrderId(orderRef.id);
      clearCart();
    } catch (error) {
      console.log(error);

    }
  };


  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {orderId ? (
        <div>
          <p>Order ID: {orderId}</p>
          <p>Gracias por tu compra</p>
          <Link to="/" onClick={clearCart}>
            Volver a los productos
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Número:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="repeatEmail">Repetir email:</label>
            <input
              type="email"
              id="repeatEmail"
              name="repeatEmail"
              value={user.repeatEmail}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit Order</button>
        </form>
      )}

      <div>
        <h3>Productos en el carrito:</h3>
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.brand} className="cart-item-image" />
            <p>{item.brand}</p>
            <p>Precio: {item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: $ {item.price * item.quantity}</p>
          </div>
        ))}
        <p>Total de la orden: $ {getTotalPrice()}</p>
      </div>
    </div>
  );
}

export default Checkout;
