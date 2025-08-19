import React from 'react'
import { QuantityInput } from './QuantityInput';

const ProductoCarrito = ({o}) => {
  const {title, image} = o;
  return (
    <div className='producto'>
        <p className='carritoP'>{title}</p>
        <img width="100%" src={image}/>
        <QuantityInput/>
    </div>
  )
}

export default ProductoCarrito
