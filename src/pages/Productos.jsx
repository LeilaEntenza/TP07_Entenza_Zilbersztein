import axios from 'axios';
import React, { useEffect } from 'react'
import {useParams} from "react-router-dom";
import { Tarjeta } from '../components/Tarjeta';
import './Productos.css'

export const Productos = ({lista, setLista}) => {
  const {category, id} = useParams();

  useEffect(()=>{
    let url;
    if (id) {
      url = `https://fakestoreapi.com/products/` + id;
    } else {
      url = category ? `https://fakestoreapi.com/products/category/` + category : "https://fakestoreapi.com/products";
    }
    axios.get(url)
      .then(res => setLista(res.data))
      .catch(err => console.log(err));
  }, [category, id]);

  if (Array.isArray(lista)) {
    return (
      <>
        <div className='productos'>
          {lista.map((producto) => (
            <Tarjeta key={producto.id} id={producto.id} title={producto.title} description={producto.description} image={producto.image} price={producto.price} rating={producto.rating}/>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>{lista.title}</h1>
        <div className='detalles'>
          <img width="17%" src={lista.image}/>
          <div className='info'>
            <p>Descripción: {lista.description}</p>
            <p>Precio: ${lista.price}</p>
            <p>Calificación: {lista.rating ? lista.rating.rate : 'N/A'}</p>
          </div>
        </div>
      </>
    );
  }
}