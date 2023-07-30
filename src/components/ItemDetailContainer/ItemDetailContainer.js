import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from "../../services/firebase/firebaseConfig";
import { useCartContext } from '../../context/CartContext';
import './ItemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount'; 

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItemToCart } = useCartContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getProductById = () => {
      const productRef = firestore.collection('products').doc(id);
      productRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            const productData = doc.data();
            setProduct(productData);
          } else {
            setError('Producto no encontrado.');
          }
        })
        .catch((error) => {
          setError('Error al obtener el producto.');
          console.log('Error al obtener el producto:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getProductById();
  }, [id]);

  const handleAddToCart = (quantity) => {
    if (product) {
      addItemToCart(product, quantity);
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {product ? (
        <div className="item-detail-container">
          <div className="item-detail-image">
            <img src={product.Imagen} alt={product.Marca} />
          </div>
          <div className="item-detail-details">
            <h2>{product.Marca}</h2>
            <p>{product.Descripcion}</p>
            <p>Disponible: {product.Disponible ? 'Sí' : 'No'}</p>
            <p>Precio: {product.Precio}</p>
            <ItemCount product={product} onAdd={handleAddToCart} /> 
          </div>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
