import { useState } from 'react';
import './App.css';

export default function HotButton() {
  const [count, setCount] = useState(0);
  let color;

  if (count <= 3) {
    color = 'hot-button indigo';
  } else if (count <= 6) {
    color = 'hot-button purple';
  } else if (count <= 9) {
    color = 'hot-button pink';
  } else if (count <= 12) {
    color = 'hot-button peach';
  } else if (count <= 15) {
    color = 'hot-button yellow';
  } else if (count <= 18) {
    color = 'hot-button white';
  }
  return (
    <>
      <button onClick={() => setCount(count + 1)} className={color}>
        HotButton
      </button>
      <p>Clicks: {count}</p>
    </>
  );
}
