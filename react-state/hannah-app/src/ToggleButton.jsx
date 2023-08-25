import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setClick] = useState(false);
  console.log('useState ', isClicked);
  const buttonStyle = {
    backgroundColor: color,
  };

  function handleClick() {
    console.log('before setter ', isClicked);
    setClick(!isClicked);
    console.log('after setter ', isClicked);
  }
  return (
    <button
      onClick={handleClick}
      style={
        isClicked
          ? buttonStyle
          : {
              backgroundColor: color,
            }
      }>
      {text}
    </button>
  );
}
