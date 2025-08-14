import React from 'react'

const ProductoCarrito = ({nombre, imagen, cantidad}) => {
  return (
    <div className='producto'>
        <p className='carritoP'>{nombre}</p>
        <img width="100%" src={imagen}/>
        <div className='numberInputContainer'>
            <button className='menos'>-</button>
            <input type='number' value={cantidad} min={0} max={100}/>
            <button className='mas'>+</button>
        </div>
    </div>
  )
}

export default ProductoCarrito
