import React from 'react'
import './Marcas.css';

export const Marcas = () => {
  return (
    <>
      <h1>Marcas con las que trabajamos</h1>
      <div className='marcas'>
        <div className="card" style={{ width: '18rem' }}>
        <img src="https://1000marcas.net/wp-content/uploads/2020/02/Saint-Laurent-logo-1.jpg" className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">Saint Laurent</h5>
            <p className="card-text">Yves Saint Laurent o YSL es una casa de moda fundada por Yves Saint Laurent (1936-2008) y su compañero Pierre Bergé. Actualmente su jefe de diseño es Anthony Vaccarello.</p>
        </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6M3Ch__JzNT8OK4fyAbxyqTJng2daa7zp4g&s" className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">Maybelline</h5>
            <p className="card-text">La compañía Maybelline fue fundada en Chicago por el farmacéutico Thomas Lyle Williams en 1915. Williams notó que su hermana mayor, Mabel, se aplicaba una mezcla de vaselina y polvo de carbón en las pestañas para darles un aspecto más oscuro y voluminoso. La adaptó con un kit de química y creó un producto local llamado Lash-Brow-Ine.</p>
        </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Logo_Supermercado_Coto.svg" className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">Coto</h5>
            <p className="card-text">Coto C.I.C.S.A es una cadena de supermercados e hipermercados argentina fundada en el año 1970 en la ciudad de Buenos Aires como carnicería integrada. En 1987 se transformó en supermercado cuando se inauguró su primer local en la ciudad de Mar de Ajó, Partido de La Costa, Provincia de Buenos Aires.</p>
        </div>
        </div>
      </div>
    </>
  );
}
