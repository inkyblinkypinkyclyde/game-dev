import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import HomeVideo from "../static/videos/arcade.mp4"
import placeholder from "../static/images/placeholder.jpg"
import ChatBox from "./ChatBox"
import io from 'socket.io-client';
import MessageList from "./MessageList"

const socket = io.connect("http://localhost:3001")

const HomePage = () => {
  
  const [messages, setMessages] = useState([])
  
  const addMessage = (submittedMessage) => {
    submittedMessage.id = Date.now();
    const updatedMessages = [...messages, submittedMessage];
    setMessages(updatedMessages);
    socket.emit("send_message", {updatedMessages})
  }

  useEffect(() => {
      socket.on("receive_message", (data) => {
        console.log(`Message Received: ${data}`);
        if (data.updatedMessages !== messages)
        setMessages(data.updatedMessages)
        })
    }, [socket])

  const messageList = messages.map(message => {
    <p>{message.name}: {message.text}</p>
  })

  return (
    <div>
        <VideoContainer>
            <Video src={HomeVideo} autoPlay loop muted></Video>
            <H1>REACT'R'CADE</H1>
            <P>Welcome!</P>
            <ButtonContainer>
            <Link to='/about'>
              <Button1>GET STARTED</Button1>
            </Link>   
            <Link to='/about'> 
              <Button2>PLAY GAME <i className='far fa-play-circle'/></Button2>
            </Link>  
            </ButtonContainer>
        </VideoContainer>
        <PreviewSection>
          <PreviewHeader>Check out our featured Games!</PreviewHeader>
          <CardContainer>
            <GameImage src={placeholder}/>
            <div>
              <GameTitle>Battleship</GameTitle>
              <GameDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Pulvinar elementum integer enim neque. Eget mi proin sed libero enim sed. Risus feugiat in ante metus dictum. Pellentesque habitant morbi tristique senectus et netus.</GameDescription>
              <Play>
                <Link to='/about'>
                  <CardButton>PLAY GAME <i className='far fa-play-circle'/></CardButton>
                </Link> 
              </Play>
            </div>  
          </CardContainer>
          <CardContainer>
            <GameImage src={placeholder}/>
            <div>
              <GameTitle>Game</GameTitle>
              <GameDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Pulvinar elementum integer enim neque. Eget mi proin sed libero enim sed. Risus feugiat in ante metus dictum. Pellentesque habitant morbi tristique senectus et netus.</GameDescription>
              <Play>
                <Link to='/about'>
                  <CardButton>PLAY GAME <i className='far fa-play-circle'/></CardButton>
                </Link>
              </Play>
            </div>  
          </CardContainer>
          <CardContainer>
            <GameImage src={placeholder}/>
            <div>
              <GameTitle>Game</GameTitle>
              <GameDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Pulvinar elementum integer enim neque. Eget mi proin sed libero enim sed. Risus feugiat in ante metus dictum. Pellentesque habitant morbi tristique senectus et netus.</GameDescription>
              <Play>
                <Link to='/about'>
                  <CardButton>PLAY GAME <i className='far fa-play-circle'/></CardButton>
                </Link>
              </Play>
            </div>  
          </CardContainer>
        </PreviewSection>
        <PreviewHeader>Chat with other users or leave a message!</PreviewHeader>
        <ChatBox onMessageSubmit={(message) => addMessage(message)}/>
        <MessageList messages={messages}/>
    </div>
  )
}

const GameDescription = styled.p`
margin-left:2rem;
`

const GameTitle = styled.h2`
margin-left:2rem;
`
const PreviewHeader = styled.h1`
display:flex;
justify-content:center;
margin-top:2rem;
`

const CardContainer = styled.div`
display:flex;
flex-direction: row;
width: 90%;
margin-top:2rem;
margin-inline:4rem;
box-shadow: 0 6px 20px lightgray;
border-radius: 10px;
overflow: hidden;
text-decoration: none;
`
// rgba(56, 125, 255, 0.17)

const PreviewSection = styled.div`
display: flex;
flex-direction: column;
`

const GameImage = styled.img`
height:25%;
width:25%;
`

const Video = styled.video`
    object-fit: cover;
    width:100%;
    height:100%;
    position:absolute;
    z-index: -1;
`

const VideoContainer = styled.div`
    height: 938px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);
    object-fit:contain;
    justify-content:center;
    `

const H1 = styled.h1`
color:white;
font-size:100px;
margin-top: -100px;
`

const P = styled.p`
margin-top:8px;
color:white;
font-size:32px;
font-family: 'Trebuchet MS';
`

const ButtonContainer = styled.div`
    margin-top:32px;
    padding: 3px;
`

const Button1 = styled.button`
padding: 8px 20px;
border-radius: 2px;
outline: none;
border: none;
cursor: pointer;
margin: 1rem;
background-color: transparent;
color: #fff;
padding: 8px 20px;
border: 1px solid white;
&:hover {
  transition: all 0.3s ease-out;
  background-color: white;
  color: black;
}
padding: 12px 26px;
font-size: 20px;
`
const Button2 = styled.button`
padding: 8px 20px;
border-radius: 2px;
outline: none;
border: none;
cursor: pointer;
margin: 1rem;
background-color: white;
color: #242424;
border: 1px solid white;
padding: 12px 26px;
font-size: 20px;
&:hover {
  transition: all 0.3s ease-out;
  background-color: red;
  color: white;
}
`
const CardButton = styled.button`
padding: 12px;
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
const Play = styled.div`
display:flex;
justify-content: flex-end;
margin-top: 80px;
margin-right: 30px;
`
export default HomePage