import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("Carrito");
    try {
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem("Carrito", JSON.stringify(cartItems));
  }, [cartItems]);

  // Agregar producto
  const addToCart = (producto) => {
  setCartItems(prev => {
    const exists = prev.find(item => item.id === producto.id);
    if (exists) {
      return prev.map(item =>
        item.id === producto.id
          ? { 
              ...item, 
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price
            }
          : item
      );
    } else {
      return [
        ...prev, 
        { 
          ...producto, 
          quantity: 1, 
          totalPrice: producto.price 
        }
      ];
    }
  });
};
 

  // Actualizar cantidad de un producto
  const updateItemQuantity = (id, newQuantity) => {
  setCartItems(prev =>
    prev.map(item =>
      item.id === id 
        ? { 
            ...item, 
            quantity: newQuantity, 
            totalPrice: newQuantity * item.price 
          } 
        : item
    )
  );
};

  // Eliminar un producto
  const removeFromCart = (idProducto) => {
    setCartItems(prev => prev.filter(producto => producto.id !== idProducto));
  };

  // Vaciar carrito
  const clearCart = () => setCartItems([]);

  // Total
  const getTotal = () => {
    return cartItems.reduce((total, producto) => total + (producto.price * (producto.quantity || 1)), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cantCartItems: cartItems.length,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
        updateItemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
