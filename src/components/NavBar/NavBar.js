import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from "../../assets/coffeemaker.png"

const Navbar = () => {
  // Define the categories to be displayed in the dropdown menu
  const categories = ['Cafetera de 1 a 3 grupos', 'Cafetera de 1 a 2 grupos', 'Cafeteras de 1 grupo'];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <h3>Productos</h3>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-items">
        <div className="dropdown">
          <button className="dropbtn">Categorías</button>
          <div className="dropdown-content">
            {categories.map((category) => (
              <Link key={category} to={`/category/${category}`}>
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
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
