import React from 'react'
import { Link } from 'react-router'
import './Tarjeta.css'

export const Tarjeta = ({title, description, image, key}) => {
  return (
    <div id={key} className="card card-custom" style={{width: '18rem'}}>
        <img src={image} className="card-img-top card-image-custom"/> 
        <div className="card-body card-body-custom">
            <h5 className="card-title line-clamp2">{title}</h5>
            <p className="card-text line-clamp">{description}</p>
            <Link className="btn  btn-custom1" to="/productos/id">Ver detalle</Link>
        </div>
    </div> 
  )
}
