import React, { useState } from 'react';
import './Checkout.css';
import { useCartContext } from '../../context/CartContext';
import {db} from "../../services/firebase/firebaseConfig"
import { collection,addDoc,getDoc,doc,deleteDoc,getDocs } from 'firebase/firestore';

const Checkout = async () => {
  const [user,setUser] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    repeatEmail: '',
  });

  const { cartItems, getTotalPrice } = useCartContext(); 
  // const orderRef = collection(db,'orders')
  // const orderAdded = await addDoc(orderRef, objOrder)
  // const db = getFirestore (appFirebase)

  // const [user,setUser] = useState(valorInicial)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setUser ({...user, [name]:value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      await addDoc(collection(db,"orders"),{
        ...user
      })
    } catch (error) {
      console.log (error)
    }
    // setUser ({...valorInicial})
  }



    
  ;
  

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
            value={user.firstName}
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
            value={user.lastName}
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
            value={user.phone}
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
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="repeatEmail">Repetir Email:</label>
          <input
            type="email"
            id="repeatEmail"
            name="repeatEmail"
            value={user.repeatEmail}
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
              <p>Precio: {item.price}</p>
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
}

export default Checkout;
