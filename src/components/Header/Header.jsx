import './Header.scss';
//the tile can be either an o or x state
function Header() {  

  return (
    <div className="Header">
        <div className="Square"><h4>X</h4></div>
        <h3>tic-tac-toe</h3>
        <div className="RestartButton">
            <h4>restart</h4>
        </div>
    </div>
  );
}

export default Header;
