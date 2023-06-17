import Item from '../Item';
import './style.css';

const PackingList = ({ items, onDeleteItem, onPackItem }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} onDeleteItem={onDeleteItem} onPackItem={onPackItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
