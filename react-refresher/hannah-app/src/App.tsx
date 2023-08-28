import { useState } from 'react';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  const [count, setCount] = useState(0);

  function handleClickDown() {
    setCount(count - 1);
  }

  function handleClickUp() {
    setCount(count + 1);
  }

  return (
    <>
      <CustomButton text="Down" count={count} onClick={handleClickDown} />
      <CustomButton text={count} />
      <CustomButton text="Up" count={count} onClick={handleClickUp} />
    </>
  );
}

export default App;
