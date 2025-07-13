import React from 'react'
import { useNavigate } from 'react-router';

export const Buscador = () => {
    const navigate = useNavigate()
    const filtrar = (e) =>{
      e.preventDefault();
      const texto = e.target.busqueda.value;
      navigate(`/busqueda/${texto}`);
    }
  return (
    <form className="d-flex" role="search" onSubmit={filtrar}>
        <input className="form-control me-2" name="busqueda" type="search" placeholder="Búsqueda" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  )
}
