import React from 'react';
import './NavBar.css';

const NavBar = () => {
  // Aquí puedes definir las categorías disponibles (puedes obtenerlas desde Firebase en el futuro)
  const categories = ['cafeteras', 'tazas', 'accesorios'];

  return (
    <nav className="navbar">
      <div className="navbar-brand">Cafeteras Adel</div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          {categories.map((category) => (
            <li key={category}>
              <a href={`/categories/${category}`}>{category}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
