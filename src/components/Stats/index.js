import './style.css';

const Stats = ({ items }) => {
  const itemsCount = items.length;
  const packedItemsCount = items.filter((item) => item.packed).length;
  return (
    <footer className='stats'>
      <em>
        🧳 You have {itemsCount} items on your list, and you have already packed{' '}
        {packedItemsCount} (
        {((packedItemsCount / (itemsCount || 1)) * 100).toFixed(0)} %)
      </em>
    </footer>
  );
};

export default Stats;
