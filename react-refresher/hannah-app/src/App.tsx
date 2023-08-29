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
      <CustomButton onCustomClick={handleClickDown} text="Down" count={count} />
      <CustomButton text={count} />
      <CustomButton onCustomClick={handleClickUp} text="Up" count={count} />
    </>
  );
}

export default App;
