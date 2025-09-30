import React, { useContext } from 'react';
import { QuantityInput } from './QuantityInput';
import { CartContext } from '../context/CartContext';
import './ProductoResumen.css';

type ProductoResumenProps = {
  image: string;
  title: string;
  price: number;
  quantity?: number; // 👈 le ponemos ? si queremos usar default
  id: number;
  totalPrice: number;
};


export const ProductoResumen: React.FC<ProductoResumenProps> = ({  image, title, price, quantity=1, id, totalPrice  }) => {
  const { updateItemQuantity, removeFromCart } = useContext(CartContext);

  return (
    <tr>
      <td className="product-thumbnail">
        <img src={image} alt={title} className="img-fluid imgresumen" />
      </td>
      <td className="product-name">
        <h2 className="h5 text-black">{title}</h2>
      </td>
      <td>${price}</td>
      <td>
        <div
          className="input-group mb-3 d-flex align-items-center quantity-container"
          style={{ maxWidth: '120px' }}
        >
          <div className="quant">
            <QuantityInput
              cantidad={quantity}
              id={id}
              updateItemQuantity={updateItemQuantity}
            />
          </div>
        </div>
      </td>
      <td>${totalPrice}</td>
      <td onClick={() => removeFromCart(id)}>
        <a href="#" className="btn btn-black btn-sm">
          X
        </a>
      </td>
    </tr>
  );
};
