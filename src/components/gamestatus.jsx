const gamestatus = ({ isx, winner, squares }) => {
  const gameover = squares.every((arr) => arr != null);
  console.log(gameover);
  const player = isx ? "X" : "0";
  let msg;
  if (gameover) {
    msg = "Game draw";
  } else {
    msg = winner ? `winner is ${winner}` : `Next player is ${player}`;
  }
  return <div>{msg}</div>;
};
export default gamestatus;
