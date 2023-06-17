import { useState } from 'react';
import Item from '../Item';
import './style.css';

const PackingList = ({ items, onDeleteItem, onPackItem }) => {
  let sortedItems;
  const [sortBy, setSortBy] = useState('input');

  if (sortBy === 'input') sortedItems = items.sort((a, b) => a.id - b.id);

  if (sortBy === 'alphabetical')
    sortedItems = items.sort((a, b) =>
      a.description.localeCompare(b.description)
    );

  if (sortBy === 'packed')
    sortedItems = items.sort((a, b) => b.packed - a.packed);

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onPackItem={onPackItem}
            />
          </li>
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='alphabetical'>Sort alphabetically</option>
          <option value='packed'>Sort by packed items</option>
        </select>
      </div>
    </div>
  );
};

export default PackingList;
