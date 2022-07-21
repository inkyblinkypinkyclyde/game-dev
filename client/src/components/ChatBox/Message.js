import React from "react";
import styled from "styled-components";

const Message = ({name, text}) => {

  return(
    <>
      <MessageStyled>{name}: {text}</MessageStyled>
    </>
  )

}

const MessageStyled = styled.h3`
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 1rem;
`

export default Message;