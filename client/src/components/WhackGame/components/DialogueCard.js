import React from "react";
import styled from "styled-components";

const DC = styled.div`
display: flex;
justify-content: center;
`


const DialogueCard = (props) => {
  return (
    <DC>
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={() => props.buttonClick()}>{props.button}</button>
    </div>
    </DC>
  );
};

export default DialogueCard;

