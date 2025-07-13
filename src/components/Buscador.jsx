import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './Buscador.css';

export const Buscador = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('');

    const filtrar = (e) =>{
      e.preventDefault();
      const texto = e.target.busqueda.value.trim();
      if (!texto) {
        setError('Por favor, escribí algo para buscar.');
        return;
      }
      setError('');
      navigate(`/busqueda/${texto}`);
    }
  return (
    <form className="d-flex" role="search" onSubmit={filtrar}>
        <input className="form-control me-2" name="busqueda" type="search" placeholder="Búsqueda" aria-label="Search"/>
        <button className="btn buscar" type="submit">Buscar</button>
        {error && <span style={{ color: 'red', marginLeft: 8 }}>{error}</span>}
    </form>
  )
}