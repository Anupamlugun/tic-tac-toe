const Square = ({ value, onClick }) => {
  return (
    <button
      type="button"
      className="square"
      id={`${value == "X" ? "bluex" : "yellow0"}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
