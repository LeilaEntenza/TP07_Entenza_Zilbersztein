import React from 'react'

export const Buscador = () => {
  
    const filtrar = (e) =>{
        e.preventDefault();
        console.log(e.target.busqueda.value);
    }
  return (
    <form className="d-flex" role="search" onSubmit={filtrar}>
        <input className="form-control me-2" name="busqueda" type="search" placeholder="Búsqueda" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  )
}
