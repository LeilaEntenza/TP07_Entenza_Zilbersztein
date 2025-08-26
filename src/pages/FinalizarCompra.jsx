import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import "./FinalizarCompra.css";
import { Link } from 'react-router-dom';

const FinalizarCompra = () => {
  const { setCartItems } = useContext(CartContext);

  useEffect(() => {
    // Vaciar carrito solo una vez al cargar la vista
    setCartItems([]);
  }, [setCartItems]);

  return (
    <div className="gracias-container">
      <div className="gracias-card">
        <div className="tick-wrapper">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/845/845646.png" 
            alt="Compra exitosa" 
            className="tick-img"
          />
        </div>
        <h1>¡Gracias por tu compra! 🎉</h1>
        <p>
          Tu pedido ha sido procesado con éxito.  
          En breve recibirás un correo con los detalles.
        </p>
        <Link to="/home" className="btn btn-primary volver-btn">
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
};

export default FinalizarCompra;
