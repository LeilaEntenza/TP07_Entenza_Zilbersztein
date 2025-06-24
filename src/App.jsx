import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import {Home} from './pages/Home';
import {Contacto} from './pages/Contacto';
import {Productos} from './pages/Productos';
import {QuienesSomos} from './pages/QuienesSomos';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/quienesssomos" element={<QuienesSomos/>}></Route>
          <Route path="/productos" element={<Productos/>}></Route>
        </Route> 
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
