import React from 'react'
import { useParams } from 'react-router'
import { Tarjeta } from '../components/Tarjeta';
import './Busqueda.css'

export const Busqueda = ({ lista }) => {
  const parametro = useParams().texto;

  // Si el parámetro está vacío, nulo o undefined, devolvemos lista vacía
  if (!parametro || parametro.trim() === '') {
    return (
      <div className='noEncontrado'>
        <p>No se encontraron productos</p>
      </div>
    );
  }

  const listaNueva = lista.filter(producto =>
    producto.title.toLowerCase().includes(parametro.toLowerCase())
  );

  if (listaNueva.length > 0)
    return (
      <div className='resultados'>
        {listaNueva.map((producto) => (
          <Tarjeta
            id={producto.id}
            title={producto.title}
            description={producto.description}
            image={producto.image}
            price={producto.price}
          />
        ))}
      </div>
    );
  else
    return (
      <div className='noEncontrado'>
        <p>No se encontraron productos</p>
      </div>
    );
}