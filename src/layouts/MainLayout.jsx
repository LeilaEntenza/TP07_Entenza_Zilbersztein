import React from 'react'
import { Link, Outlet } from 'react-router'
import './MainLayout.css';
import { Buscador } from '../components/Buscador';

export const MainLayout = () => {
  return (
    <div className="layout">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">NombreEmpresa</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/home">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/productos">Ver todos</Link></li>
                    <li><Link className="dropdown-item" to="/productos/categoria/men's clothing">Men's clothing</Link></li>
                    <li><Link className="dropdown-item" to="/productos/categoria/women's clothing">Women's clothing</Link></li>
                    <li><Link className="dropdown-item" to="/productos/categoria/electronics">Electronics</Link></li>
                    <li><Link className="dropdown-item" to="/productos/categoria/jewelery">Jewelery</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contacto">Contacto</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/quienessomos">Quiénes somos</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Marcas
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <Buscador />
            </div>
          </div>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}