import React from 'react'
import { Link } from 'react-router'
import './Tarjeta.css'

export const Tarjeta = ({title, description, image, id, price, rating}) => {
  console.log("el índice de este producto es" + id);
  const enlace = "/productos/producto/" + id;
  return (
    <div id={id} className="card card-custom" style={{width: '18rem'}}>
        <img src={image} className="card-img-top card-image-custom"/> 
        <div className="card-body card-body-custom">
            <h5 className="card-title line-clamp2">{title}</h5>
            <p className="card-text line-clamp">{description}</p>
            <Link className="btn btn-custom1" to={enlace}>Ver detalle</Link>
        </div>
    </div> 
  )
}
