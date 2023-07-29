import React, { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data/products.json";
import { useCartContext } from "../../context/CartContext"; // Asegúrate de importar el contexto CartContext

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItemToCart } = useContext(useCartContext); // Obtener la función addItemToCart del contexto

  useEffect(() => {
    // Función para buscar el producto con el ID proporcionado en el JSON
    const getProductById = () => {
      const productFound = productsData.find((item) => item.id === parseInt(id));
      setProduct(productFound);
    };

    getProductById();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Agregar el producto al carrito usando la función addItemToCart del contexto
      addItemToCart(product, 1); // En este caso, siempre agregamos 1 producto a la vez
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
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
