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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Navigate to="/TP07_Entenza_Zilbersztein/home" replace />} />
          <Route path="/TP07_Entenza_Zilbersztein/home" element={<Home lista={lista}/>}></Route>
          <Route path="/TP07_Entenza_Zilbersztein/contacto" element={<Contacto/>}></Route>
          <Route path="/TP07_Entenza_Zilbersztein/quienessomos" element={<QuienesSomos/>}></Route>
          <Route path="/TP07_Entenza_Zilbersztein/productos/categoria/:category" element={<Productos lista={lista} setLista={setLista}/>}></Route>
          <Route path="/TP07_Entenza_Zilbersztein/productos/producto/:id" element={<Productos lista={lista} setLista={setLista}/>}></Route>
          <Route path="/TP07_Entenza_Zilbersztein/productos" element={<Productos lista={lista} setLista={setLista}/>}></Route>
          <Route path="/TP07_Entenza_Zilbersztein/busqueda/:texto" element ={<Busqueda lista={lista} setLista={setLista}/>}></Route>
          <Route path="/TP07_Entenza_Zilbersztein/marcas" element={<Marcas/>}></Route>
        </Route> 
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
