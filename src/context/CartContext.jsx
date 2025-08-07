import React, { createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart =(producto) =>{
    setCartItems([...cartItems, producto]);
  }
  const removeFromCart = (idProducto) =>{
    const nuevoArray = cartItems.filter(producto=>producto.id!==idProducto);
    setCartItems(nuevoArray);
  }
  const clearCart = () =>{
    setCartItems([]);
  }
  const getTotal = () =>{
    let montoTotal;
    cartItems.map(producto=>montoTotal+=producto.price);
    return montoTotal;
  }

  return (
    <CartContext.Provider
      value={{
        cartItems, 
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
