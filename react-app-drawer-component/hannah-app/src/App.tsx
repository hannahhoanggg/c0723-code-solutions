import { useState } from 'react';
import './App.css';
import AppDrawer from './AppDrawer';

const menuItems = ['About', 'Get Started', 'Sign In'];

export default function App() {
  const [item, setItem] = useState('No menu selected');
  return (
    <div>
      <AppDrawer header="Menu" items={menuItems} onSelect={setItem} />
      <h1>{item}</h1>
    </div>
  );
}
