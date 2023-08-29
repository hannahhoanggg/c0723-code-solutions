import { useState } from 'react';
import './App.css';

export default function ToggleButton({ label, toggled }) {
  const [isOn, setIsOn] = useState(toggled);

  function handleToggle() {
    setIsOn(!isOn);
  }

  return (
    <>
      <label>
        <input type="checkbox" defaultChecked={isOn} onClick={handleToggle} />
        <span />
        {label}
        <p>{isOn ? 'ON' : 'OFF'}</p>
      </label>
    </>
  );
}
