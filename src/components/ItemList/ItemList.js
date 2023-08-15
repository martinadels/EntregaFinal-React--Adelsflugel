import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4">
          <div className="item-card">
            <img src={product.img} alt={product.brand} />
            <h3>{product.brand}</h3>
            <p>{product.style}</p>
            <p>Disponible: {product.stock ? 'Sí' : 'No'}</p>
            <p>Precio: {product.price}</p>
            <Link to={`/item/${product.id}`}>
              <button>Ver detalles</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
