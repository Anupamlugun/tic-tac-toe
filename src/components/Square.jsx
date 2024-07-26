const Square = ({ value, onClick, winner, winposition }) => {
  if (winner) {
    var [a, b, c] = winner.higlitline;
  }
  //console.log(a, b, c, winposition);
  return (
    <button
      type="button"
      className={`square  ${
        winposition == a || winposition == b || winposition == c
          ? "winning"
          : ""
      }`}
      id={`${value == "X" ? "bluex" : "yellow0"}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
