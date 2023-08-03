import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { useCartContext } from '../../context/CartContext';
import './ItemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItemToCart } = useCartContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1); 
  const [stockAvailable, setStockAvailable] = useState(0); 

  useEffect(() => {
    const getProductById = async () => {
      try {
        const productRef = doc(db, 'products', id);
        const docSnapshot = await getDoc(productRef);
        if (docSnapshot.exists()) {
          const productData = docSnapshot.data();
          setProduct(productData);
          setStockAvailable(productData.stock);
        } else {
          setError('Producto no encontrado.');
        }
      } catch (error) {
        setError('Error al obtener el producto.');
        console.log('Error al obtener el producto:', error);
      } finally {
        setLoading(false);
      }
    };

    getProductById();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      if (quantity > stockAvailable) {
        alert('No hay suficiente stock disponible. Por favor, selecciona una cantidad menor.');
      } else {
        addItemToCart(product, quantity);
      }
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
            <img src={product.img} alt={product.brand} /> 
          </div>
          <div className="item-detail-details">
            <h2>{product.brand}</h2>
            <p>{product.style}</p>
            <p>Disponible: {product.stock ? 'Sí' : 'No'}</p>
            <p>Precio: {product.price}</p>
            <ItemCount product={product} onAdd={setQuantity} />
            <p>Cantidad seleccionada: {quantity}</p>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
