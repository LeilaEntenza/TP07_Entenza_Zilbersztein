import axios from 'axios'
import React, { useEffect } from 'react'

export const Productos = () => {
  let categoriaActual;
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(function (response) {
      const objeto = response.data;
      console.log(objeto);
    })
    .catch(function (error) {
      console.log(error);
    })
  })
  return (
    <ul>
      
    </ul>
  )
}
