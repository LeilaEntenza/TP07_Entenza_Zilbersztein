import axios from 'axios';
import React, { useEffect } from 'react'
import {useParams} from "react-router-dom";
import { Tarjeta } from './Tarjeta';

export const Productos = ({lista, setLista}) => {
  const { category} = useParams();
  console.log("categoria" + category);
  useEffect(()=>{
    const url = category? `https://fakestoreapi.com/products/category/` + category
      : "https://fakestoreapi.com/products";
    console.log("la url es " + url);
    axios.get(url)
    .then(res=>setLista(res.data))
    .catch(err=>console.log(err));
  }, [category])
  return (
    <>
    {lista.map((producto, index)=>(<Tarjeta key={index} title={producto.title} description={producto.description} image={producto.image}/>))}
    </>
  )
}
