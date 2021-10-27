import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card/Card';


function App() {
  return (
    <>
      <div className="App">
        <img className="App-logo" src={logo} alt="logo" />
        <Card />
      </div>
    </>
  );
}

export default App;
