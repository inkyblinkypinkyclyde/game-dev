import React from "react";

const Message = ({name, text}) => {

  return(
    <>
      <h4>{name}</h4>
      <p>{text}</p>
    </>
  )

}

export default Message;