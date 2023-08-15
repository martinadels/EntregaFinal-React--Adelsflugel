import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams(); 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsRef = id
          ? query(collection(db, 'products'), where('category', '==', id))
          : collection(db, 'products');

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
  }, [id]);

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
                <Link to={`/item/${product.id}`}>
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
