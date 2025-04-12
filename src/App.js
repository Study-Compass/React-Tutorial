import './App.css';
import './assets/fonts.css'
import Board from './components/Board/Board';
import Header from './components/Header/Header';
import React, { useEffect, useState } from 'react';


function App() {
  const [reset, setReset] = useState(false);

  return (
    <div className="App">
        <Header reset={reset} setReset={setReset}/>
        <Board reset={reset} setReset={setReset}/>
    </div>
  );
}

export default App;
