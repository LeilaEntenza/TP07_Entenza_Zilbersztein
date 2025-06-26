import React from 'react'

const Card = ({title, description, image, price}) => {
  return (
    <div className="card" style="width: 18rem;">
        <img src={image} className="card-img-top"/> 
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Ver detalle</a>
        </div>
    </div> 
  )
}

export default Card
