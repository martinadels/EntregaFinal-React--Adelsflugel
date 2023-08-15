import React, { useState} from 'react';
import { useCartContext } from '../../context/CartContext';
import '../ItemDetailContainer/ItemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({product, stockAvailable}) => {
  const { addItemToCart } = useCartContext();
  const [quantity, setQuantity] = useState(0);  
  const handleAddToCart = (cantidad) => {
    if (product) {
      if (cantidad > stockAvailable) {
        alert('No hay suficiente stock disponible. Por favor, selecciona una cantidad menor.');
      } else {
        setQuantity(cantidad)
        addItemToCart(product, cantidad);
      }
    }
  };



  return (
    <div>
    
        <div className="item-detail-container">
          <div className="item-detail-image">
            <img src={product.img} alt={product.brand} /> 
          </div>
          <div className="item-detail-details">
            <h2>{product.brand}</h2>
            <p>{product.style}</p>
            <p>Disponible: {product.stock ? 'Sí' : 'No'}</p>
            <p>Precio: {product.price}</p>
           { quantity > 0 ? <Link to='/cart'>Ir al carrito</Link>: <ItemCount initial={1} stock={product.stock} onAdd={handleAddToCart} />}
          </div>
        </div>
      
    </div>
  );
};

export default ItemDetail;