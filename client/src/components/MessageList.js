import React from "react";
import Message from "./Message";

const MessageList = ({messages}) => {
    
    const messageNodes = messages.map(message => {
        return (
           <Message name={message.name} text={message.text} key={message.id}/>
        )
    })

    return (
        <>
            {messageNodes}
        </>
    )
}

export default MessageList;