import './App.css';

function App() {
  return (
    <div className="App">
      <div className='button__container'>
        <button className="button yes-button" onClick={() => { console.log('yes') }}>Yes</button>
        <button className="button no-button" onClick={() => { console.log('no') }}>No</button>
      </div>
    </div >
  );
}

export default App;
