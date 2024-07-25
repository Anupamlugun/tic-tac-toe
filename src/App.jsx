import { useState } from "react";
import Board from "./components/Board";
import "./styles.scss";
import winnerfun from "./components/winnerfun";
import Gamestatus from "./components/gamestatus";
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
          return isx ? "X" : "0";
        }
        return currentval;
      });
    });
    setx(() => (isx ? false : true));
  };

  const winner = winnerfun(squares);

  return (
    <div className="app">
      <Gamestatus isx={isx} winner={winner} squares={squares} />
      <Board squares={squares} position={position} />
    </div>
  );
};

export default App;
