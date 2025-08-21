import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Home.css'

export const Home = () => {
  const [producto, setProducto] = useState()
  const [producto2, setProducto2] = useState()

  useEffect(() => {
    getProduct('https://fakestoreapi.com/products')
    AOS.init({ duration: 1000, once: true }) // init animaciones
  }, [])

  const getProduct = (api) => {
    axios.get(api)
      .then((response) => {
        const objeto = response.data
        setProducto(objeto[0])
        setProducto2(objeto[2])
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      {/* Hero */}
      <div className="Inicio" data-aos="fade-down">
        <h1 className="home-title">Productos</h1>
        <p>Buscá lo que necesitas</p>
        <button type="button" className="btn btn-custom">
          <Link className='enlace' to="/productos">Catálogo</Link>
        </button>
      </div>

      {/* Info de envíos/pagos */}
      <div className='info3' data-aos="fade-up">
        <div className='informacion'>
          <p className='barra'>Envíos internacionales</p>
          <p className='barra'>Diversos métodos de pago</p>
          <p>Retiro al día siguiente de tu compra</p>
        </div>
      </div>

      {/* Productos destacados */}
      <div className='info3'>
        <div className='producto1' data-aos="zoom-in-right">
          <h1>{producto ? producto.title : "Cargando producto..."}</h1>
          <h2>{producto ? producto.description : "Cargando descripción..."}</h2>
          <img width="18%" src={producto ? producto.image : ""} alt="producto1"/>
          <button type="button" className="btn btn-custom">
            <Link className='enlace' to="/producto/1">Más información</Link>
          </button>
        </div>

        <div className='producto1' data-aos="zoom-in-left">
          <h1>{producto2 ? producto2.title : "Cargando producto..."}</h1>
          <h2>{producto2 ? producto2.description : "Cargando descripción..."}</h2>
          <img width="18%" src={producto2 ? producto2.image : ""} alt="producto2"/>
          <button type="button" className="btn btn-custom">
            <Link className='enlace' to="/producto/2">Más información</Link>
          </button>
        </div>
      </div>
    </>
  )
}
