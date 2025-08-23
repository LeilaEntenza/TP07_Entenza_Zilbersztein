import React, { useContext } from 'react';
import { QuantityInput } from './QuantityInput';
import { CartContext } from '../context/CartContext';

const ProductoCarrito = ({ o }) => {
  const { updateItemQuantity } = useContext(CartContext);
  const { id, title, image, quantity } = o;

  return (
    <div className='producto'>
      <p className='carritoP'>{title}</p>
      <img width="100%" src={image} />
      <QuantityInput cantidad={quantity} id={id} updateItemQuantity={updateItemQuantity} />
    </div>
  );
};

export default ProductoCarrito;
