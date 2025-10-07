import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import './Tarjeta.css';
import { CartContext } from '../context/CartContext';
import { z } from 'zod';

const ratingSchema = z.object({
  rate: z.number().min(0).max(5),
  count: z.number().nonnegative(),
});

const tarjetaSchema = z.object({
  category: z.string(),
  description: z.string(),
  id: z.number(),
  image: z.string().url(),
  price: z.number().nonnegative(),
  rating: ratingSchema.optional(),
  title: z.string(),
});

type Rating = {
  rate: number;
  count: number;
};

type TarjetaProps = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};

export const Tarjeta: React.FC<TarjetaProps> = (props) => {
  const parseResult = tarjetaSchema.safeParse(props);

  if (!parseResult.success) {
    console.error('Error en los datos del producto:', parseResult.error.format());
    return <div className="card-error"> Error: datos del producto inválidos</div>;
  }

  const { category, description, id, image, price, rating = { rate: 0, count: 0 }, title } =
    parseResult.data;
  const { addToCart } = useContext(CartContext);
  const enlace = '/producto/' + id;
  

  const renderStars = (rating: Rating) => {
    if (!rating || typeof rating.rate !== 'number') {
      return [...Array(5)].map((_, i) => (
        <span key={i} className="star" style={{ color: '#ddd' }}>★</span>
      ));
    }

    const stars = [];
    const fullStars = Math.floor(rating.rate);
    const hasHalfStar = rating.rate % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star">☆</span>);
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star" style={{ color: '#ddd' }}>★</span>);
    }

    return stars;
  };

  return (
    <div id={id.toString()} className="card card-custom" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top card-image-custom" alt={title} />
      <div className="card-body card-body-custom">
        <h5 className="card-title line-clamp2">{title}</h5>
        <p className="card-text line-clamp">{description}</p>

        <div className="rating">
          {rating && rating.rate !== undefined
            ? renderStars(rating)
            : <span className="star-placeholder">Sin calificación</span>}
          <span className="rating-count">
            ({rating && rating.count !== undefined ? rating.count : 0})
          </span>
        </div>

        <p className="price">{price.toFixed(2)}</p>

        <div className="buttonsProd">
          <Link className="btn btn-custom1" to={enlace}>Ver detalle</Link>
          <button
            className="agregarButton"
            onClick={() =>
              addToCart({
                category,
                description,
                id,
                image,
                price,
                rating,
                title,
              })
            }
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
