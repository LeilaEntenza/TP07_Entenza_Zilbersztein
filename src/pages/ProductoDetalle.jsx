import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { CartContext } from '../context/CartContext';


function ProductoDetalle() {
  const {id} = useParams();
  const [producto,setProducto] = useState(null);
  const {addToCart} = useContext(CartContext);

  useEffect(()=>{
    let url;
    if (id) {
      url = `https://fakestoreapi.com/products/` + id;    
      axios.get(url)
        .then(res => setProducto(res.data))
        .catch(err => console.log(err));
    }
  }, [id]);

  if(!producto) return <div>Cargando....</div>

  return (
    <>
        <h1>{producto.title}</h1>
        <div className='detalles'>
          <img width="17%" src={producto.image}/>
          <div className='info'>
            <p>Descripción: {producto.description}</p>
            <p>Precio: ${producto.price}</p>
            <p>Calificación: {producto.rating ? producto.rating.rate : 'N/A'}</p>
            <button onClick={()=>addToCart()}>Añadir al carrito</button>
          </div>
        </div>
      </>
  )
}

export default ProductoDetalle