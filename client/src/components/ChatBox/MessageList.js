import React from "react";
import styled from "styled-components";
import Message from "./Message";

const MessageList = ({messages}) => {
    
    const messageNodes = messages.map(message => {
        return (
           <Message name={message.name} text={message.text} key={message.id}/>
        )
    })

    return (
        <StyledMessageList>
            {messageNodes}
        </StyledMessageList>
    )
}

const StyledMessageList = styled.div`
border: 1px solid Black;
margin-inline: 2rem;
`

export default MessageList;