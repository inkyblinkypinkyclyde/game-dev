import React, { useState, useEffect } from "react";
import GameContainer from "./GameContainer.js";
import DialogueCard from "./DialogueCard.js";
import "./whackApp.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [gameState, setGameState] = useState("start");

  function gameStart() {
    let btnSound = new Audio("./sfx/large-btn.mp3");
    btnSound.play();
    setTime(40);
    setScore(0);
    setGameState("game");
  }

  function incrementScore() {
    setScore(score + 1);
  }

  useEffect(() => {
    if (gameState === "game") {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      if (time === 0) {
        setGameState("end");
      }
      return () => clearTimeout(timer);
    }
  }, [gameState, time]);

  function getMainContent() {
    switch (gameState) {
      case "start":
        return (
          <DialogueCard
            title={"How To Play"}
            content={"There are nine holes in the play area top are filled with virtual moles, which pop up at random. Points are scored by whacking each mole as it appears. If the player does not click a mole within a certain time, it eventually sinks back into its hole with no score. After a designated time limit, the game ends, regardless of the player's score. The final score is based on the number of moles the player struck."}
            button={"Start Now"}
            buttonClick={gameStart}
          />
        );
      case "game":
        return <GameContainer setScore={incrementScore} />;
      case "end":
        return (
          <DialogueCard
            title={"Game Over !"}
            content={`Your Score : ${score}`}
            button={"Play Again"}
            buttonClick={gameStart}
          />
        );
      default:
        return;
    }
  }

  return (
    <>
      <h1 className="title">Whack&nbsp;-&nbsp;A&nbsp;-&nbsp;Mole&nbsp;!</h1>
      {getMainContent()}
      <p
        className="main-p"
        style={
          gameState === "game" ? { display: "block" } : { display: "none" }
        }>
        Your&nbsp;Score&nbsp;is&nbsp;:&nbsp;{score} | Time left&nbsp;:&nbsp;
        {time}
      </p>
    </>
  );
};

export default App;