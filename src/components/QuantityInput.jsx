import React from 'react';
import './QuantityInput.css';

export const QuantityInput = ({ cantidad, id, updateItemQuantity }) => {
  const min = 1, max = 100;

  const handleChange = (e) => {
    const value = Math.max(min, Math.min(max, parseInt(e.target.value) || 0));
    updateItemQuantity(id, value);
  };

  const handleClick = (action) => {
    let newVal = cantidad;
    if (action === 'add') newVal = Math.min(cantidad + 1, max);
    if (action === 'minus') newVal = Math.max(cantidad - 1, min);
    updateItemQuantity(id, newVal);
  };

  return (
    <div className='numberInputContainer'>
      <button className='menos' onClick={() => handleClick('minus')} type='button'>-</button>
      <input
        className='qInput'
        type='number'
        value={cantidad}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <button className='mas' onClick={() => handleClick('add')} type='button'>+</button>
    </div>
  );
};
