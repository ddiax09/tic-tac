import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);

  const message = "it is now "+  go  +" turn ";

  const checkScore = () => {
    const winningConditions = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    winningConditions.forEach(array => {
      let circleWin = array.every(index => cells[index] === "circle");
      if (circleWin) {
        setWinningMessage("Circle wins!");
        return;
      }

      let crossWin = array.every(index => cells[index] === "cross");
      if (crossWin) {
        setWinningMessage("cross wins!");
        return;
      }
    });
  }

  if (winningMessage) {
    const tryBtn = document.querySelector("button");
    tryBtn.classList.remove("try-btn-hidden");
    tryBtn.addEventListener("click", () => {
      setCells(["", "", "", "", "", "", "", "", ""]);
      setWinningMessage(null);
      tryBtn.classList.add("try-btn-hidden");
    }
  );
  }

  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell 
            key={index}
            id={index}
            cell={cell} 
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
      <button className="try-btn-hidden">Try Again</button>
    </div>
  );
}

export default App;
