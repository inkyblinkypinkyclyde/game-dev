import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
        <Form onSubmit={handleFormSubmit}>
            <Input type="text" placeholder="Name..." value={name} onChange={handleNameChange}></Input>
            <Input type="text" placeholder="Message..." value={text} onChange={handleTextChange}></Input>
            <Button type="submit" value="Send Message"></Button>
        </Form>
        <ul>{}</ul>
        </>
    )
}

const Form = styled.form`
margin-left:1rem;
`

const Input = styled.input`
margin-left: 1rem;
margin-top: 2rem;
padding: 1rem;
border-radius: 2px;
cursor: text;
background-color: white;
color: #242424;
border: 1px solid Black;
padding: 12px 26px;
font-size: 20px;
`
const Button = styled.input`
margin-left:1rem;
border-radius: 2px;
cursor: pointer;
background-color: white;
color: #242424;
border: 1px solid Black;
padding: 12px 26px;
font-size: 20px;
&:hover {
  transition: all 0.3s ease-out;
  background-color: red;
  color: white;
}
`

export default ChatBox;