import './style.css';

const Item = ({ item }) => {
  return (
    <>
      <span className={item.packed ? 'packed' : ''}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </>
  );
};

export default Item;
