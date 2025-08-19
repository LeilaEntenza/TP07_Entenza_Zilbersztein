import React, { useContext } from 'react';
import { QuantityInput } from './QuantityInput';
import { CartContext } from '../context/CartContext';

const ProductoCarrito = ({ o }) => {
  const { updateItemQuantity } = useContext(CartContext);
  const { id, title, image, quantity } = o;

  return (
    <div className='producto'>
      <p className='carritoP'>{title} x{quantity}</p>
      <img width="100%" src={image} />
      <QuantityInput
        cantidad={quantity}
        onQuantityChange={(newQuantity) => updateItemQuantity(id, newQuantity)}
      />
    </div>
  );
};

export default ProductoCarrito;








