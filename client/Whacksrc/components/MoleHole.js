import React, { useState, useEffect } from "react";
import mole_img from "../img/mole.webp";
import hit_img from "../img/bang.webp";
import hole from "../img/hole.webp";
import grass from "../img/grass.webp";


function MoleHole({ molePopped, setScore }) {
  const [moleState, setMoleState] = useState(molePopped ? "mole" : "no-mole");

  useEffect(() => {
    setMoleState(molePopped ? "mole" : "no-mole");
  }, [molePopped]);

  const handleClick = () => {
    if (moleState === "mole") {
      setMoleState("escaped");
      const hitSound = new Audio("./sfx/hit.mp3");
      hitSound.play();
      setScore();
    }
  };

  return (
    <div className="grid-item" onClick={handleClick}>
      <img className="hole" src={hole} alt="" />
      <img
        className={`hole-content ${moleState === "mole" ? "mole" : ""}`}
        src={getMoleImage(moleState)}
        alt=""
      />
    </div>
  );
}

let getMoleImage = (state) => {
  if (state === "escaped") {
    return hit_img;
  }
  if (state === "mole") {
    return mole_img;
  }
  return null;
};

export default MoleHole;