import './App.css'
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import {Home} from './pages/Home';
import {Contacto} from './pages/Contacto';
import {QuienesSomos} from './pages/QuienesSomos';
import {Productos} from './pages/Productos';
import {Marcas} from './pages/Marcas';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Busqueda } from './pages/Busqueda';
import ProductoDetalle from './pages/ProductoDetalle';
import CartProvider from './context/CartContext';
import { Carrito } from './pages/Carrito'

//para el carrito: crear un contexto con la lista. Hacer un componente en el que 
//aparezca el ícono con el número de componentes que haya. El carrito
//redirige a una página en la que aparecen los componentes.
//Se puede eliminar elementos desde ese carrito.
function App() {
  const[lista, setLista] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(function (response) {
      const objeto = response.data;
      setLista(objeto);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])
  useEffect(()=>{
   console.log(lista); 
  }, [lista])
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home lista={lista}/>}></Route>
            <Route path="/contacto" element={<Contacto/>}></Route>
            <Route path="/quienessomos" element={<QuienesSomos/>}></Route>
            <Route path="/productos/categoria/:category" element={<Productos lista={lista} setLista={setLista}/>}></Route>
            <Route path="/producto/:id" element={<ProductoDetalle lista={lista} setLista={setLista}/>}></Route>
            <Route path="/productos" element={<Productos lista={lista} setLista={setLista}/>}></Route>
            <Route path="/busqueda/:texto" element ={<Busqueda lista={lista} setLista={setLista}/>}></Route>
            <Route path="/marcas" element={<Marcas/>}></Route>
          </Route> 
        </Routes> 
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
