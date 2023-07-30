import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase/firebaseConfig';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      const productsRef = firestore.collection('products');
      productsRef.get().then((snapshot) => {
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      });
    };

    getProducts();
  }, []);

  return (
    <div>
      <div className="item-list">
        {products.map((product) => (
          <div key={product.id} className="item-card">
            <img src={product.Imagen} alt={product.Marca} />
            <h3>{product.Marca}</h3>
            <p>{product.Descripcion}</p>
            <p>Disponible: {product.Disponible ? 'Sí' : 'No'}</p>
            <p>Precio: {product.Precio}</p>
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
