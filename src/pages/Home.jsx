import React from 'react'
import { Productos } from '../components/Productos'
import './Home.css'

export const Home = ({lista}) => {
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
    <Productos listado={lista}/>
    </>

  )
}
