import { useState } from "react";
import Board from "./components/Board";
import "./styles.scss";
import Winnerfun from "./components/winnerfun";
import Gamestatus from "./components/gamestatus";
const App = () => {
  const [squares, setsqures] = useState(Array(9).fill(null));
  const [isx, setx] = useState(true);
  console.log(squares);

  const winner = Winnerfun(squares);

  const position = (e) => {
    //console.log(e);
    if (squares[e] || winner) {
      return;
    }

    setsqures(() => {
      return squares.map((currentval, indexval) => {
        if (indexval === e) {
          return isx ? "X" : "0";
        }
        return currentval;
      });
    });
    setx(() => (isx ? false : true));
  };

  const resetgame = () => {
    setsqures(Array(9).fill(null));
  };
  const gameover = squares.every((arr) => arr != null);
  return (
    <div className="app">
      <Gamestatus isx={isx} winner={winner} squares={squares} />
      <Board squares={squares} position={position} winner={winner} />
      <button
        className={`btn-reset  ${winner || gameover ? "active" : ""}`}
        type="button"
        onClick={resetgame}
      >
        Start new game
      </button>
    </div>
  );
};

export default App;
