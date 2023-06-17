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
    }
  };

  const handleDeleteItem = (itemId) => {
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
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
