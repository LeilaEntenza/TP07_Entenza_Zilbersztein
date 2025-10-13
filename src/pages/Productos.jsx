import axios from 'axios';
import React, { useEffect } from 'react'
import {useParams} from "react-router-dom";
import { Tarjeta } from '../components/Tarjeta';
import './Productos.css'
import CartProvider from '../context/CartContext';

export const Productos = ({lista, setLista}) => {
  const {category} = useParams();

  useEffect(()=>{
    let url;
    if (category) {
      url = `https://fakestoreapi.com/products/category/` + category;
    } else {      
      url = `https://fakestoreapi.com/products/`;
    }
    axios.get(url)
      .then(res => setLista(res.data))
      .catch(err => console.log(err));
  }, [category]);

  if (Array.isArray(lista)) {
    return (
      <>
          <div className='productos'>
            {lista.map((producto) => (
              <Tarjeta key={producto.id} id={producto.id} title={producto.title} description={producto.description} image={producto.image} price={producto.price} rating={producto.rating} category={producto.category}/>
            ))}
          </div>
      </>
    );
  } 
}