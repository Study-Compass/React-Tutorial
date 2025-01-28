import './App.css';
import './assets/fonts.css'
import Board from './components/Board/Board';
import Header from './components/Header/Header';


function App() {

  function hello_world(){
    console.log("Hello World")
  }

  return (
    <div className="App">
        <Header/>
        <Board/>
    </div>
  );
}

export default App;
