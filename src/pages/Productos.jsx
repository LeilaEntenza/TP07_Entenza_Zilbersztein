import axios from 'axios';
import React, { useEffect } from 'react'
import {useParams} from "react-router-dom";
import { Tarjeta } from '../components/Tarjeta';

export const Productos = ({lista, setLista}) => {
  const {category, id} = useParams();
  console.log("categoria " + category);
  console.log("id" + id);
  useEffect(()=>{
    let url;
    if (id)
    {
      url = `https://fakestoreapi.com/products/` + id;
    }
    else{
    url = category? `https://fakestoreapi.com/products/category/` + category
      : "https://fakestoreapi.com/products";
    }
    console.log("la url es " + url);
    axios.get(url)
    .then(res=>setLista(res.data))
    .catch(err=>console.log(err));
  }, [category, id], [])
  console.log(lista);
  if (category || (!id))
  return (
    <>
      {lista.map((producto)=>(<Tarjeta id={producto.id} title={producto.title} description={producto.description} image={producto.image}/>))}
    </>
  )
  else
  return (
    <>
      <Tarjeta id={lista.id} title={lista.title} description={lista.description} image={lista.image}/>
    </>
  )
}
