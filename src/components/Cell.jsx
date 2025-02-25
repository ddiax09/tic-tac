const Cell = ({ id, cell, go, setGo, cells, setCells, winningMessage }) => {
  //this function helps us to identify the clicked cell.
  const handleClick = (event) => {
    if (!winningMessage) {
      const taken =
        event.target.firstChild.classList.contains("circle") ||
        event.target.firstChild.classList.contains("cross");

      if (!taken) {
        if (go === "circle") {
          event.target.firstChild.classList.add("circle");
          handleCellsChange("circle");
          setGo("cross");
        }

        if (go === "cross") {
          event.target.firstChild.classList.add("cross");
          handleCellsChange("cross");
          setGo("circle");
        }
      }
    }
  };
  //this function helps us to update the cells array with the new class name.
  const handleCellsChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      }
      return cell;
    });
    setCells(nextCells);
  };

  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
