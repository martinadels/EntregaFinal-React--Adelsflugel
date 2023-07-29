import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/products.json';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
      <div className="item-list">
        {productsData.map((product) => (
          <div key={product.id} className="item-card">
            <img src={product.img} alt={product.brand} />
            <h3>{product.brand}</h3>
            <p>{product.style}</p>
            <p>{product.category}</p>
            <Link to={`/item/${product.id}`}>
              <button>Ver detalles</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
