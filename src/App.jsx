import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [ans, setANS] = useState("");
  const [randomValues, setRandomValues] = useState({
    rock: Math.floor(Math.random() * 10),
    paper: Math.floor(Math.random() * 10),
    scissor: Math.floor(Math.random() * 10),
  });

  const game1 = () => {
    if (randomValues.rock > randomValues.scissor) {
      setCounter(counter + 1);
      setANS("You Won !!!");
    } else {
      setCounter(counter - 1);
      setANS("You Lost, Please Try Again!!!");
    }
  };

  const game2 = () => {
    if (randomValues.paper > randomValues.rock) {
      setCounter(counter + 1);
      setANS("You Won !!!");
    } else {
      setCounter(counter - 1);
      setANS("You Lost, Please Try Again!!!");
    }
  };

  const game3 = () => {
    if (randomValues.scissor > randomValues.paper) {
      setCounter(counter + 1);
      setANS("You Won !!!");
    } else {
      setCounter(counter - 1);
      setANS("You Lost, Please Try Again!!!");
    }
  };

  const resetGame = () => {
    setANS("");
    setRandomValues({
      rock: Math.floor(Math.random() * 10),
      paper: Math.floor(Math.random() * 10),
      scissor: Math.floor(Math.random() * 10),
    });
  };

  return (
    <div className="game-container">
      <h2
        className="text text-dark font-weight-bold m-4"
        style={{letterSpacing:"10px",fontFamily:"fantasy"}}
      >
        GAME
      </h2>

      <div className="game-header-cont">
        <div className="game-text">
          <div>ROCK</div>
          <div>PAPER</div>
          <div>SCISSOR</div>
        </div>

        <div className="game-score">
          <div>SCORE</div>
          <h2>{counter}</h2>
        </div>
      </div>

      <div className="images">
        <img
          onClick={game1}
          className="img"
          src="src/assets/Rock.avif"
          alt="ROCK"
          width="110px"
        />
        <img
          onClick={game2}
          className="img"
          src="src/assets/paper.avif"
          alt="PAPER"
          width="110px"
        />
        <img
          onClick={game3}
          className="img"
          src="src/assets/scissor.avif"
          alt="SCISSOR"
          width="110px"
        />
      </div>

      <div className="ans">{ans}</div>
      <button onClick={resetGame} className="btn btn-primary m-auto">
        Play Again
      </button>
    </div>
  );
};

export default App;
