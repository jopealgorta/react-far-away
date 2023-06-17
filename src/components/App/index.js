import './style.css';
import Logo from '../Logo';
import Form from '../Form';
import PackingList from '../PackingList';
import Stats from '../Stats';
import { useEffect, useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
    if (localStorage.getItem('items')) {
      const savedItems = JSON.parse(localStorage.getItem('items'));
      localStorage.setItem('items', JSON.stringify([...savedItems, item]));
    } else {
      localStorage.setItem('items', JSON.stringify([item]));
    }
  };

  const handleDeleteItem = (itemId) => {
    if (!window.confirm(`Are you sure you want to delete: ${itemId}`))
      return;

    const updatedItems = items.filter((item) => itemId !== item.id);
    setItems(updatedItems);

    if (localStorage.getItem('items')) {
      localStorage.setItem('items', JSON.stringify(updatedItems));
    }
  };

  const handlePackItem = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, packed: !item.packed } : item
    );

    setItems(updatedItems);

    if (localStorage.getItem('items')) {
      localStorage.setItem('items', JSON.stringify(updatedItems));
    }
  };

  const handleClearList = () => {
    if (!window.confirm('Are you sure you want to clear the list?'))
      return;
    setItems([]);
    localStorage.removeItem('items');
  };

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items'));
    if (savedItems) setItems(savedItems);
  }, [setItems]);

  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackItem={handlePackItem}
        onListClear={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
