import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ProductoResumen } from './ProductoResumen';

export const Tabla = () => {
  const {cartItems} = useContext(CartContext);
  return (
    <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Imagen</th>
                      <th className="product-name">Producto</th>
                      <th className="product-price">Precio</th>
                      <th className="product-quantity">Cantidad</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Borrar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(c=> <ProductoResumen c={c}/>)}

                    
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
