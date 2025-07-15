import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Tarjeta } from '../components/Tarjeta';
import './Busqueda.css'
import axios from 'axios';

export const Busqueda = ({ lista, setLista }) => {
  const { texto: parametro } = useParams();
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (!Array.isArray(lista) || lista.length === 0) {
      setCargando(true);
      axios.get('https://fakestoreapi.com/products')
        .then((res) => {
          setLista(res.data);
        })
        .catch((err) => {
          console.error('Error cargando productos:', err);
        })
        .finally(() => {
          setCargando(false);
        });
    }
  }, [lista, setLista]);

  if ((!Array.isArray(lista) || lista.length === 0) && cargando) {
    return <p>Cargando productos...</p>;
  }

  const listaFiltrada = Array.isArray(lista)
    ? lista.filter((producto) =>
        producto.title.toLowerCase().includes(parametro.toLowerCase())
      )
    : [];

  return listaFiltrada.length > 0 ? (
    <div className='resultados'>
      {listaFiltrada.map((producto) => (
        <Tarjeta
          key={producto.id}
          id={producto.id}
          title={producto.title}
          description={producto.description}
          image={producto.image}
          price={producto.price}
        />
      ))}
    </div>
  ) : (
    <div className='noEncontrado'>
      <p>No se encontraron productos</p>
    </div>
  );
};