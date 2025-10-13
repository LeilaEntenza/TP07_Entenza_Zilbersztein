import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Tabla } from '../components/Tabla';
import './ResumenCompra.css';

export const ResumenCompra = () => {
  const { cartItems } = useContext(CartContext);

  const isCartEmpty = !cartItems || cartItems.length === 0;

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Carrito</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <Tabla />

      {!isCartEmpty && (
        <div className="botonfinalizar">
          <Link to="/comprafinalizada" className="btn btn-custom">
            Finalizar compra
          </Link>
        </div>
      )}
    </>
  );
};
