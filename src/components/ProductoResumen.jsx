import React, { useContext} from 'react'
import { QuantityInput } from './QuantityInput';
import { CartContext } from '../context/CartContext';

export const ProductoResumen = ({c}) => {
  const {image, title, price, quantity, id, totalPrice} = c;
  const {updateItemQuantity, removeFromCart} = useContext(CartContext);
  console.log(c);
  return (
    <tr>
        <td className="product-thumbnail">
            <img src={image} alt="Product 1" className="img-fluid" />
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
                
                    <QuantityInput cantidad={quantity} id={id} updateItemQuantity={updateItemQuantity} />
            </div>
        </td>
            <td>${totalPrice}</td>
        <td onClick={()=>removeFromCart(id)}>
            <a href="#" className="btn btn-black btn-sm">
                X
            </a>
        </td>
    </tr>
  )
}
