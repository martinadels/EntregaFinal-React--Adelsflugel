import React, { useState } from 'react';


const ItemCount = ({initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
 
  const add = ( ) => {
    if(quantity < stock){
      setQuantity(quantity + 1)
    }
  }

  const subtract = () => {
    if(quantity > 0){
      setQuantity(quantity - 1 )
    }
  }

  return (
    <div>
      <div>
      <button onClick={add}>+</button>
      <p>Cantidad seleccionada: {quantity}</p>
      <button onClick={subtract}>-</button>
      </div>
      <button onClick={()=>onAdd(quantity)} disabled={quantity === 0 || stock === 0}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;