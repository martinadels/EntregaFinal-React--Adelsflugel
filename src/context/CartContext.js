import React, { useState, useContext, createContext } from "react";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems,setCartItems]=useState([]);
  const [setCart]=useState([]);
  
  const addItemToCart = (item, quantity) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity }]);
  };
  
  const removeItem = (itemId) => {
    const deleteItem = cartItems.filter(item=>item.id !==itemId)
  
    setCartItems([...deleteItem]);
    // setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };
  

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const cartContextValue = {
    cartItems,
    addItemToCart,
    removeItem,
    clearCart,
    totalQuantity: getTotalQuantity(),
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
