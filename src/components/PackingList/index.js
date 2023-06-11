import Item from '../Item';
import './style.css';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
];

const PackingList = () => {
  return (
    <div className='list'>
      <ul>
        {initialItems.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
