import './App.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import {Home} from './pages/Home';
import {Contacto} from './pages/Contacto';
import {QuienesSomos} from './pages/QuienesSomos';
import {Productos} from './pages/Productos';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
          <Route path="/home" element={<Home lista={lista}/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/quienessomos" element={<QuienesSomos/>}></Route>
          <Route path="/productos/categoria/:category" element={<Productos lista={lista} setLista={setLista}/>}></Route>
          <Route path="/productos/producto/:id" element={<Productos lista={lista} setLista={setLista}/>}></Route>
          <Route path="/productos" element={<Productos lista={lista} setLista={setLista}/>}></Route>
        </Route> 
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
