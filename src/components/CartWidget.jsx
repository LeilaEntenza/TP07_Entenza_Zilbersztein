import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="carrito" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 20 20">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>
        <span className="cant">{cartItems.length}</span>
      </div>

      <div className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h4>Carrito</h4>
          <button onClick={toggleMenu} className="close-btn">&times;</button>
        </div>
        <div className="sidebar-content">
          <div className='producto'>
              <p className='carritoP'>Producto 1</p>
              <img width="100%" src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/12858/production/_130346857_capture.png"/>
              <div className='numberInputContainer'>
                <button className='menos'>-</button>
                <input type='number' value="0" min={0} max={100}/>
                <button className='mas'>+</button>
              </div>
          </div>
          <div className='producto'>
            <p className='carritoP'>Producto 2</p>
            <img width="100%" src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/12858/production/_130346857_capture.png"/>
          </div>
        </div>
      </div>
      {open && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};
