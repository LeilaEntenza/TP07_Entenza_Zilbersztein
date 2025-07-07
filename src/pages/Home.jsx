import React, { useState, useEffect } from 'react'
import { Productos } from '../components/Productos'
import './Home.css'
import axios from 'axios'

export const Home = () => {
  const [producto, setProducto] = useState();
  useEffect(() =>{
    getProduct('https://fakestoreapi.com/products');
  }, [])

  const getProduct = (api) =>{
    axios.get(api)
    .then(function (response) {
      const objeto = response.data;
      setProducto(objeto.slip.advice)
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  
  return (    
    <>
    <div className="Inicio">
      <h1>Productos</h1>
      <p>Buscá lo que necesitas</p>
      <button type="button" className="btn btn-custom">Catálogo</button>
    </div>
    {/* <div className='info2'>
    <div className='informacion'>
      <p className='barra'>Envíos internacionales</p>
      <p className='barra'>Diversos métodos de pago</p>
      <p>Retiro al día siguiente de tu compra</p>
    </div>
    </div> */}
    <div className='producto1'>
      <h1>Nombre</h1>
      <h2>Subtítulo</h2>
      <button type="button" className="btn btn-custom">Más información</button>
    </div>
    
    </>

  )
}
