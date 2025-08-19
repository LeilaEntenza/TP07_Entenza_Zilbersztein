import React, { createContext, useEffect, useState} from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(()=>{
    localStorage.setItem("Carrito", cartItems); 
    console.log("items: " + cartItems);
  }, [cartItems])
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
        cantCartItems:cartItems.length,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal 
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
