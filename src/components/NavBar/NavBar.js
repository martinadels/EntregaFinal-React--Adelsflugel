import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'; // Importa el componente CartWidget aquí
import './NavBar.css';
import logo from "../../assets/coffeemaker.png"

const Navbar = () => {
  // Resto del código del componente Navbar
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
        <h3>Productos</h3>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-items"></div>
      <div className="navbar-cart">
        <Link to="/cart">
          <h3>Ir al carrito</h3>
        </Link>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
