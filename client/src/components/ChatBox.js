import React, { useEffect, useState } from "react";
// import io from 'socket.io-client';

// const socket = io.connect("http://localhost:3001")

const ChatBox = ({onMessageSubmit}) => {
    const [name, setName] = useState("")
    const [text, setText] = useState("");
    // const [messageList, setMessageList] = useState([])

    // const sendMessage = () => {
    //     socket.emit("send_message", {message})
    // }

    const handleNameChange = (evt) => {
        setName(evt.target.value);
      }
    
    const handleTextChange = (evt) => {
        setText(evt.target.value);
      }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const nameToSubmit = name.trim();
        const textToSubmit = text.trim();
        if (!nameToSubmit || !textToSubmit){
          return
        }
    
        onMessageSubmit({
          name: nameToSubmit,
          text: textToSubmit
        });
    
        setName("");
        setText("");
      }
    
    // useEffect(() => {
    //     socket.on("receive_message", (data) => {
    //         setMessage(data.message)
    //     })
    // }, [socket])


    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Name..." value={name} onChange={handleNameChange}></input>
            <input type="text" placeholder="Message..." value={text} onChange={handleTextChange}></input>
            <input type="submit" value="Send Message"></input>
        </form>
        <h1>Message:</h1>
        <ul>{}</ul>
        </>
    )
}

export default ChatBox;