import React from 'react'
import { useParams } from 'react-router'
import { Tarjeta } from '../components/Tarjeta';

export const Busqueda = ({lista}) => {
  const parametro = useParams().texto;
  const listaNueva = lista.filter(producto =>
    producto.title.toLowerCase().includes(parametro.toLowerCase())
  );
  if (listaNueva.length > 0)
  return (
    <>
      {listaNueva.map((producto)=>(<Tarjeta id={producto.id} title={producto.title} description={producto.description} image={producto.image}/>))}
    </>
  )
  else
  return (
    <p>not found</p>
  )
}
