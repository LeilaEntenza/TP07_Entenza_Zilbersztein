import React, { useContext } from 'react';
import { QuantityInput } from './QuantityInput';
import { CartContext } from '../context/CartContext';

type ProductoCarritoProps = {
  o: {
    id: number;
    title: string;
    image: string;
    quantity: number;
  };
};

const ProductoCarrito: React.FC<ProductoCarritoProps> = ({ o }) => {
  const { updateItemQuantity } = useContext(CartContext);
  const { id, title, image, quantity } = o;

  return (
    <div className="producto">
      <p className="carritoP">{title}</p>
      <img width="100%" src={image} alt={title} />
      <QuantityInput
        cantidad={quantity}
        id={id}
        updateItemQuantity={updateItemQuantity}
      />
    </div>
  );
};

export default ProductoCarrito;