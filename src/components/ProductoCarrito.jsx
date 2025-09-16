import React, { useContext } from 'react';
import { QuantityInput } from './QuantityInput';
import { CartContext } from '../context/CartContext';
import PropTypes, { number, shape, string } from 'prop-types'

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

ProductoCarrito.propTypes = {
    o:shape({
    id: number.isRequired,
    title: string.isRequired,
    image: string.isRequired,
    quantity: number.isRequired
  }).isRequired
}
export default ProductoCarrito;
