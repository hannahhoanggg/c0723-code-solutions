import './App.css';
import HomePage from './HomePage';
import AppDrawer from './AppDrawer';

const heading = ['Menu', 'About', 'Get Started', 'Sign In'];

function App() {
  return (
    <div className="App">
      <AppDrawer />
      <HomePage items={heading} />
    </div>
  );
}

export default App;
