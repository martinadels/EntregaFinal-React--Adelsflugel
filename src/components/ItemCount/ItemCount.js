import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';

const ItemCount = ({ product, onAdd }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCartContext();

  const handleAddToCart = () => {
    if (quantity > product.stock) {
      alert('No hay suficiente stock disponible. Por favor, selecciona una cantidad menor.');
    } else {
      addItemToCart(product,quantity);
    }
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
