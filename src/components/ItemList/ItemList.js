import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id} className="item-card">
          <img src={product.img} alt={product.name} className="item-image" />
          <h3>{product.name}</h3>
          <Link to={`/item/${product.id}`}>
            <button>Ver detalles</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
