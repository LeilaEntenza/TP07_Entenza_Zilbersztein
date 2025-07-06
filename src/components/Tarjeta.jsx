import React from 'react'
import { Link } from 'react-router'

export const Tarjeta = ({title, description, image, key}) => {
  return (
    <div id={key} className="card" style={{width: '18rem'}}>
        <img src={image} className="card-img-top"/> 
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link className="btn btn-primary" to="/productos/id">Ver detalle</Link>
        </div>
    </div> 
  )
}
