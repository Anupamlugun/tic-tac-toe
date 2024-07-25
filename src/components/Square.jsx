const Square = ({ value, onClick }) => {
  let playercolor;
  if (value === "X") {
    playercolor = "redx";
  } else if (value === "0") {
    playercolor = "green0";
  } else {
    playercolor = "white";
  }
  return (
    <button type="button" className="square" id={playercolor} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
