import React, { useState } from 'react';
import './QuantityInput.css'; // Importa el CSS

export const  QuantityInput = ({ min = 1, max = 100, initial = 1 }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setQuantity(Math.min(Math.max(value, min), max));
    }
  };

  const handleClick = (action) => {
    setQuantity((prev) => {
      if (action === 'add' && prev < max) return prev + 1;
      if (action === 'minus' && prev > min) return prev - 1;
      return prev;
    });
  };

  return (
    <div className='numberInputContainer'>
      <button className='menos' onClick={() => handleClick('minus')} type='button'>-</button>
      <input
        className='qInput'
        type='number'
        value={quantity}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <button className='mas' onClick={() => handleClick('add')} type='button'>+</button>
    </div>
  );
};