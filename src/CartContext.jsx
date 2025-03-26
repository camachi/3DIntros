import React, { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Componente proveedor de contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar elementos al carrito
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
