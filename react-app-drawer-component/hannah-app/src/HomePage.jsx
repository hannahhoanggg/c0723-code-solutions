import AppDrawer from './AppDrawer';
import { useState } from 'react';

export default function HomePage({ items }) {
  const [header, setHeader] = useState('');

  function handleClick(heading) {
    setHeader(heading);
  }

  return (
    <div className="home-page">
      <AppDrawer items={items} onClick={handleClick} />
      <h2>{header}</h2>
    </div>
  );
}
