import React from "react";

const DialogueCard = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={() => props.buttonClick()}>{props.button}</button>
    </div>
  );
};

export default DialogueCard;

