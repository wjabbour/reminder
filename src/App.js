import logo from './logo.svg';
import './App.css';

function doAppStuff () {
  console.log('whaddup!')
}

function App() {
  return (
    <div className="App">
      <button
        style={{ 'background-color': 'blue', color: 'white' }}
        onClick={doAppStuff}
      >
        Click Me!
      </button>
    </div>
  );
}

export default App;
