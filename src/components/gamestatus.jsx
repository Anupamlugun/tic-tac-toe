const gamestatus = ({ isx, winner, squares }) => {
  const gameover = squares.every((arr) => arr != null);
  //console.log(gameover);
  const player = isx ? "X" : "O";
  let msg;
  if (gameover && !winner) {
    msg = "Game draw";
  } else {
    msg = winner ? `winner is ${winner.winner}` : `Next player is ${player}`;
  }
  return (
    <div className={`${winner ? "text-green" : "text-orange"}`}>{msg}</div>
  );
};
export default gamestatus;
