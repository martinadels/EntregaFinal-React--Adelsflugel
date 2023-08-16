import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stockAvailable, setStockAvailable] = useState(0);

  useEffect(() => {
    const getProductById = async () => {
      try {
        const productRef = doc(db, 'products', id);
        const docSnapshot = await getDoc(productRef);
        if (docSnapshot.exists()) {
          // const productData = docSnapshot.data();
          const productData = {
            id: docSnapshot.id,
            ...docSnapshot.data(),
          };
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



  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {product ? (
        <ItemDetail product={product} stockAvailable={stockAvailable} />
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer