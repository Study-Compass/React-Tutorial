import './App.css';
import Board from './components/Board/Board';

function App() {

  function hello_world(){
    console.log("Hello World")
  }

  return (
    <div className="App">
        <Board/>
    </div>
  );
}

export default App;
