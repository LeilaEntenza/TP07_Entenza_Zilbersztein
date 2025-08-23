import React, { useContext } from 'react'
import { Link } from 'react-router'
import './Tarjeta.css'
import {CartContext } from '../context/CartContext'

export const Tarjeta = ({category,description,id,image,price,rating,title}) => {
  const {addToCart} = useContext(CartContext)
  const enlace = "/producto/" + id;//chequear dirección
  
  // Función para renderizar estrellas
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating.rate);
    const hasHalfStar = rating.rate % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star">☆</span>);
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star" style={{color: '#ddd'}}>★</span>);
    }
    
    return stars;
  };

  return (
    <div id={id} className="card card-custom" style={{width: '18rem'}}>
        <img src={image} className="card-img-top card-image-custom" alt={title}/> 
        <div className="card-body card-body-custom">
          <h5 className="card-title line-clamp2">{title}</h5>
          <p className="card-text line-clamp">{description}</p>
          
          {/* Rating con estrellas */}
          <div className="rating">
            {renderStars(rating)}
            <span className="rating-count">({rating.count})</span>
          </div>
          
          <p className="price">{price.toFixed(2)}</p>
          
          <div className='buttonsProd'>
            <Link className="btn btn-custom1" to={enlace}>Ver detalle</Link>
            <button className='agregarButton' onClick={()=>addToCart({category:category, description:description,id:id,image:image,price:price,rating:rating,title:title})}>Añadir al carrito</button> 
          </div>
        </div>
    </div> 
  )
}

