import './App.css';
import Header from './components/Header/Header';
import './assets/fonts.css';
import Board from './components/Board/Board';
import React, { useState } from "react";


function App() {
  const [reset, setReset] = useState(false);

  return (
    <div className="App">
      <Header setReset={setReset}/>
      <Board reset={reset} setReset={setReset}/>

    </div>
  );
}

export default App;










