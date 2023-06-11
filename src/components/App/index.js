import './style.css';
import Logo from '../Logo';
import Form from '../Form';
import PackingList from '../PackingList';
import Stats from '../Stats';

const App = () => {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

export default App;
