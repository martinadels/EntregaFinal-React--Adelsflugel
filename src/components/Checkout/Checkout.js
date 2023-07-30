import React, { useState } from 'react';
import './Checkout.css';
import { useCartContext } from '../../context/CartContext';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    repeatEmail: '',
  });

  const { cartItems, getTotalPrice } = useCartContext(); // Obtenemos los productos del carrito y el precio total

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="repeatEmail">Repeat Email:</label>
          <input
            type="email"
            id="repeatEmail"
            name="repeatEmail"
            value={formData.repeatEmail}
            onChange={handleChange}
            required
          />
        </div>

        {/* Lista de productos del carrito */}
        <div>
          <h3>Productos en el carrito:</h3>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.brand}</p>
              <p>Precio unitario: {item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: {item.price * item.quantity}</p>
            </div>
          ))}
          <p>Total de la orden: {getTotalPrice()}</p>
        </div>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;
