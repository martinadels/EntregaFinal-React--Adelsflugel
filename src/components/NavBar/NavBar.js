import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { useCartContext } from '../../context/CartContext';

const NavBar = () => {
  const { cartItems } = useCartContext();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Productos</Link>
        </div>
        <div className="navbar-cart">
          <Link to="/cart">
            <CartWidget itemCount={cartItems.length} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
