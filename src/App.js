
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from "./context/CartContext"


export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <CartWidget />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Productos" />} />
          <Route path="/category:id" element={<ItemListContainer greeting="Productos" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter >
  )
}