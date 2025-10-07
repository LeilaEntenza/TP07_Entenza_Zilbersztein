import React from 'react';
import './QuantityInput.css';
import { z } from 'zod';

const quantityInputSchema = z.object({
  cantidad: z.number().min(1).max(100),
  id: z.number().nonnegative(),
  updateItemQuantity: z.function(),
});

type QuantityInputProps = z.infer<typeof quantityInputSchema>;

export const QuantityInput: React.FC<QuantityInputProps> = (props) => {
  const parseResult = quantityInputSchema.safeParse(props);

  if (!parseResult.success) {
    console.error('Error en QuantityInput props:', parseResult.error.format());
    return <div className='input-error'>Datos inválidos</div>;
  }

  const { cantidad: safeCantidad, id: safeId, updateItemQuantity: safeUpdate } = parseResult.data;

  const min = 1;
  const max = 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(min, Math.min(max, parseInt(e.target.value) || 0));
    (safeUpdate as (id: number, quantity: number) => void)(safeId, value);
  };

  const handleClick = (action: 'add' | 'minus') => {
    let newVal = safeCantidad;
    if (action === 'add') newVal = Math.min(safeCantidad + 1, max);
    if (action === 'minus') newVal = Math.max(safeCantidad - 1, min);
    (safeUpdate as (id: number, quantity: number) => void)(safeId, newVal);
  };

  return (
    <div className='numberInputContainer'>
      <button className='menos' onClick={() => handleClick('minus')} type='button'>-</button>
      <input
        className='qInput'
        type='number'
        value={safeCantidad}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <button className='mas' onClick={() => handleClick('add')} type='button'>+</button>
    </div>
  );
};
