import React from 'react';
import './QuantityInput.css';

type QuantityInputProps = {
  cantidad: number;
  id: number;
  updateItemQuantity: (id: number, cantidad: number) => void;
};

export const QuantityInput: React.FC<QuantityInputProps> = ({ cantidad, id, updateItemQuantity }) => {
  const min = 1, max = 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(min, Math.min(max, parseInt(e.target.value) || 0));
    updateItemQuantity(id, value);
  };

  const handleClick = (action: 'add' | 'minus') => {
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
