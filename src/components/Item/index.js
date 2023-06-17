import './style.css';

const Item = ({ item, onDeleteItem, onPackItem }) => {
  return (
    <>
      <input
        type='checkbox'
        onChange={() => onPackItem(item.id)}
        value={item.packed}
        checked={item.packed}
      />
      <span className={item.packed ? 'packed' : ''}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </>
  );
};

export default Item;
