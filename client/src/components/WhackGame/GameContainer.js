import React, { useState, useEffect } from "react";
import MoleHole from "./MoleHole";

const GameContainer = ({ setScore }) => {
  const HoleIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [selectedHole, setSelectedHole] = useState(generateRandom(1, 9));

  useEffect(() => {
    const timer = setTimeout(moleEscaped, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  function moleKilled() {
    setScore();
  }

  function moleEscaped() {
    setSelectedHole(generateRandom(1, 9, selectedHole));
  }

  return (
    <div className="game-grid">
      {HoleIds.map((holeId) => (
        <MoleHole
          key={holeId}
          setScore={moleKilled}
          molePopped={holeId === selectedHole}
        />
      ))}
    </div>
  );
};

function generateRandom(min, max, exclude) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  if (exclude) {
    return num === exclude ? generateRandom(min, max, exclude) : num;
  } else {
    return num;
  }
}

export default GameContainer;