import { useState } from 'react';
import './style.css';

const Form = ({ onAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!description || !quantity) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem);
    setDescription('');
    setQuantity(1);
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <div>
        <h3>What do you need for your 😍 trip?</h3>
      </div>
      <div className='fields'>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type='text'
          placeholder='Item...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default Form;
