import { useState } from "react";
import Board from "./components/Board";
import "./styles.scss";
import winnerfun from "./components/winnerfun";
const App = () => {
  const [squares, setsqures] = useState(Array(9).fill(null));
  const [isx, setx] = useState(true);
  console.log(squares);

  const position = (e) => {
    console.log(e);
    if (squares[e] || winner) {
      return;
    }

    setsqures(() => {
      return squares.map((currentval, indexval) => {
        if (indexval === e) {
          return isx ? "x" : "0";
        }
        return currentval;
      });
    });
    setx(() => (isx ? false : true));
  };
  const player = isx ? "x" : "0";
  const winner = winnerfun(squares);
  const gamestatus = winner
    ? `winner is ${winner}`
    : `Next player is ${player}`;
  return (
    <div className="App">
      <h2>{gamestatus}</h2>
      <Board squares={squares} position={position} />
    </div>
  );
};

export default App;
