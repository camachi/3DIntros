import React, { createContext, useState, useEffect,removeFromCart } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Componente proveedor de contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Cargar el carrito desde localStorage al inicio
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  const clearCart = () => {
    setCart([]);
  };

  // Función para agregar elementos al carrito
  const addToCart = (item) => {
    const newItem = { ...item, id: Date.now() }; 
    setCart((prevCart) => {
      const updatedCart = [...prevCart, newItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  return (
    <CartContext.Provider value={{ addToCart, cart,removeFromCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

