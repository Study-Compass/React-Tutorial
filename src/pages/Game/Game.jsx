import './Game.scss';
import Board from '../../components/Board/Board';
import Header from '../../components/Header/Header';
function Game() {  
  return (
    <div className="Game">
      <Header/>
      <Board/>
    </div>
  );
}

export default Game;
