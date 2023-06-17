import './style.css';

const Stats = ({ items }) => {
  const itemsCount = items.length;
  const packedItemsCount = items.filter((item) => item.packed).length;
  const packedItemsPercentage = Math.round(
    (packedItemsCount / itemsCount) * 100
  );

  return (
    <footer className='stats'>
      <em>
        {itemsCount === 0
          ? '📦 Start packing!'
          : packedItemsPercentage === 100
          ? 'You got everything! 🎉 Ready to go ✈️'
          : `🧳 You have ${itemsCount} items on your list, and you have already packed ${packedItemsCount} (${packedItemsPercentage} %)`}
      </em>
    </footer>
  );
};

export default Stats;
