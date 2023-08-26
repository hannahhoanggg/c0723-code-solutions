import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick({ text }) {
    alert('You clicked on ' + `${text}`);
  }
  return (
    <div>
      <CustomButton
        onCustomClick={handleCustomClick}
        text="Fancy"
        color="red"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="Hello"
        color="pink"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="World"
        color="lightblue"
      />
    </div>
  );
}

export default App;
