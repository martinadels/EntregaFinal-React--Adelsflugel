import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig'; 
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsRef = collection(db, 'products'); 
        const snapshot = await getDocs(productsRef);
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="item-list-container">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="item-card">
                <img src={product.img} alt={product.brand} />
                <h3>{product.brand}</h3>
                <p>{product.style}</p>
                <p>Disponible: {product.stock ? 'Sí' : 'No'}</p>
                <p>Precio: {product.price}</p>
                <Link to={`/item/${product.id}`}> {/* Utiliza template literal para incluir el id del producto en la URL */}
                  <button>Ver detalles</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
