import { useState } from 'react';
import './App.css';

export default function Accordion({ topics }) {
  const [id, setId] = useState(0);

  function handleToggle(toggleId) {
    setId(toggleId);
  }

  return (
    <div>
      <Title text={topics} id={id} onClick={handleToggle} />
      <Content />
    </div>
  );
}

function Title({ title, keyId, onToggle }) {
  return (
    <title key={keyId} onClick={() => onToggle(keyId)}>
      {title}
    </title>
  );
}

function Content({ text }) {
  return <p>{text}</p>;
}
