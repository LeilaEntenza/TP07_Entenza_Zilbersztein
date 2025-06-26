import './App.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import {Home} from './pages/Home';
import {Contacto} from './pages/Contacto';
import {Productos} from './components/Productos';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import {QuienesSomos} from './pages/QuienesSomos';

function App() {
  const[lista, setLista] = useState();
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
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/home" element={<Home lista={lista}/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          {/*<Route path="/quienesssomos" element={<QuienesSomos/>}></Route>*/}
          <Route path="/productos" element={<Productos/>}></Route>
        </Route> 
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
