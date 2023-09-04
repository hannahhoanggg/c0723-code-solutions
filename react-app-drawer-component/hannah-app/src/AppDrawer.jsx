import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './App.css';

export default function AppDrawer({ header, items, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function displayItem(item) {
    toggleOpen();
    onSelect(item);
  }

  return (
    <div>
      <FaBars onClick={toggleOpen} className="menu-icon" />
      {/* <Backdrop isOpen={isOpen} onClick={toggleOpen} />
      <Menu isOpen={isOpen}> */}
      <h3 className="menu-heading">{header}</h3>
      <ul className="menu-items">
        {items.map((item) => (
          <li
            key={item}
            className="menu-item"
            onClick={() => displayItem(item)}>
            {item}
          </li>
        ))}
      </ul>
      {/* </Menu> */}
    </div>
  );
}
