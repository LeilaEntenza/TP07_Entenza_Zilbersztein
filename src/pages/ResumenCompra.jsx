import ProductoCarrito from '../components/ProductoCarrito';
import { QuantityInput } from '../components/QuantityInput';
import { Tabla } from '../components/Tabla';
import './ResumenCompra.css';

export const ResumenCompra = () => {
  return (
    <>
    <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Cart</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      <Tabla/>
    </>
  );
};
