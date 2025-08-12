import React, { useContext } from 'react'
import { Link } from 'react-router'
import './Tarjeta.css'
import {CartContext } from '../context/CartContext'

export const Tarjeta = ({category,description,id,image,price,rating,title}) => {
  const {addToCart} = useContext(CartContext)
  const enlace = "/producto/" + id;//chequear dirección
  return (
    <div id={id} className="card card-custom" style={{width: '18rem'}}>
        <img src={image} className="card-img-top card-image-custom"/> 
        <div className="card-body card-body-custom">
          <h5 className="card-title line-clamp2">{title}</h5>
          <p className="card-text line-clamp">{description}</p>
          <p>Precio: ${price}</p>
          <div className='buttonsProd'>
            <Link className="btn btn-custom1" to={enlace}>Ver detalle</Link>
            <button className='agregarButton' onClick={()=>addToCart({category:category, description:description,id:id,image:image,price:price,rating:rating,title:title})}>Añadir al carrito</button> 
          </div>
        </div>
    </div> 
  )
}

