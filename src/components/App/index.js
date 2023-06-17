import './style.css';
import Logo from '../Logo';
import Form from '../Form';
import PackingList from '../PackingList';
import Stats from '../Stats';
import { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => setItems((items) => [...items, item]);

  const handleDeleteItem = (itemId) =>
    setItems((items) => items.filter((item) => itemId !== item.id));

  const handlePackItem = (itemId) =>
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );

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
