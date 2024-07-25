import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setsqures] = useState(Array(9).fill(null));
  console.log(squares);
  const position = (e) => {
    console.log(e);
    setsqures(() => {
      return squares.map((currentval, indexval) => {
        if (indexval === e) {
          return "X";
        }
        return currentval;
      });
    });
  };

  const rendersquare = (p) => {
    return <Square value={squares[p]} onClick={() => position(p)} />;
  };

  return (
    <div className="board">
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>
      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>
      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  );
};
export default Board;
