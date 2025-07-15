import React, { useState, useEffect } from 'react'
import { Productos } from './Productos'
import './Home.css'
import axios from 'axios'
import { Link, Outlet } from 'react-router'

export const Home = () => {
  const [producto, setProducto] = useState();
  const [producto2, setProducto2] = useState();
  let objeto;
  useEffect(() =>{
    getProduct('https://fakestoreapi.com/products');
  }, [])

  const getProduct = (api) =>{
    axios.get(api)
    .then(function (response) {
      objeto = response.data;
      setProducto(objeto[0])
      setProducto2(objeto[2])
    })
    .catch(function (error) {
      console.log(error);
    })

  }
  
  return (    
    <>
    <div className="Inicio">
      <h1 className="home-title animate__animated animate__fadeInDown">Productos</h1>
      <p>Buscá lo que necesitas</p>
      <button type="button" className="btn btn-custom"><Link className='enlace' to="/productos">Catálogo</Link>
</button>
    </div>
    <div className='info3'>
    <div className='informacion'>
      <p className='barra'>Envíos internacionales</p>
      <p className='barra'>Diversos métodos de pago</p>
      <p>Retiro al día siguiente de tu compra</p>
    </div>
    </div> 
    <div className='info3'>
    <div className='producto1'>
      <h1>{producto ? producto.title : "Cargando producto..."}</h1>
      <h2>{producto ? producto.description : "Cargando descripción..."}</h2>
      <img width="18%" src={producto ? producto.image : "Cargando producto..."}/>
      <button type="button" className="btn btn-custom"><Link className='enlace' to="/TP07_Entenza_Zilbersztein/productos/producto/1">Más información</Link></button>
    </div>
    <div className='producto1'>
      <h1>{producto2 ? producto2.title : "Cargando producto..."}</h1>
      <h2>{producto2 ? producto2.description : "Cargando descripción..."}</h2>
      <img width="18%" src={producto2 ? producto2.image : "Cargando producto..."}/>
      <button type="button" className="btn btn-custom"><Link className='enlace' to={`/TP07_Entenza_Zilbersztein/productos/producto/2`} >Más información</Link></button>
    </div>
    </div>
    </>

  )
}
