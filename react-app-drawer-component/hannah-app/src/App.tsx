import { useState } from 'react';
import './App.css';
import AppDrawer from './AppDrawer';

const menuItems = [
  'The Legend of Zelda',
  'A Link to the Past',
  'Ocarina of Time',
  'The Wind Waker',
  'Breath of the Wild',
];

export default function App() {
  const [item, setItem] = useState('No menu selected');
  return (
    <div>
      <AppDrawer header="Choose a Game" items={menuItems} onSelect={setItem} />
      <h1>{item}</h1>
    </div>
  );
}
