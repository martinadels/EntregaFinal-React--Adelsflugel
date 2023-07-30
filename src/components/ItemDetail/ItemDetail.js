import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products.json';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItemToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProductById = () => {
      const productFound = productsData.find((item) => item.id === parseInt(id));
      setProduct(productFound);
    };

    getProductById();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItemToCart(product, quantity);
    }
  };

  return (
    <div>
      {product ? (
        <div className="item-detail">
          <img src={product.img} alt={product.brand} />
          <h2>{product.brand}</h2>
          <p>{product.style}</p>
          <p>{product.category}</p>
          <p>Precio: {product.price}</p>
          <input
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetail;
