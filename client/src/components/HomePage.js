import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import HomeVideo from "../static/videos/arcade.mp4"
import placeholder from "../static/images/placeholder.jpg"
import ChatBox from "./ChatBox"
import io from 'socket.io-client';
import MessageList from "./MessageList"

const socket = io.connect("http://localhost:3001")

const HomePage = () => {

  const ref = useRef(null)
  const [messages, setMessages] = useState([{name:"Admin", text: "Welcome to React'R'cade!"}])
  
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


  const handleScrollClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div>
        <VideoContainer>
            <Video src={HomeVideo} autoPlay loop muted></Video>
            <H1>REACT'R'CADE</H1>
            <P>Welcome!</P>
            <ButtonContainer>
            <Button1 onClick={handleScrollClick}>GET STARTED</Button1>
            <Link to='/about'> 
              <Button2>PLAY GAME <i className='far fa-play-circle'/></Button2>
            </Link>  
            </ButtonContainer>
        </VideoContainer>
        <PreviewSection ref={ref}>
          <PreviewHeader>Check out our featured Games!</PreviewHeader>
          <CardContainer>
            <GameImage src="https://i.imgur.com/nHpLxfG.png"/>
            <div>
              <GameTitle>Battleship</GameTitle>
              <GameDescription>Battleship is the classic naval combat game that brings together competition, strategy, and excitement. In head-to-head battle, you search for the enemy s fleet of ships and destroy them one by one. No ship is safe in this game of stealth and suspense. Try to protect your own fleet while you annihilate your opponents.</GameDescription>
              <Play>
                <Link to='/battleships/start'>
                  <CardButton>PLAY A GAME <i className='far fa-play-circle'/></CardButton>
                </Link> 
              </Play>
            </div>  
          </CardContainer>
          <CardContainer>
            <GameImage src="https://i.imgur.com/hmW2Leh.png"/>
            <div>
              <GameTitle>Snake</GameTitle>
              <GameDescription>Your goal is to move the snake around and eat as many red “food” blocks as possible. There is only one food block at any given time. When the food is eaten, the snake grows in length. If you hit the snake itself or the edge of the board, the game is over.</GameDescription>
              <Play>
                <Link to='/snake'>
                  <CardButton>PLAY GAME <i className='far fa-play-circle'/></CardButton>
                </Link>
              </Play>
            </div>  
          </CardContainer>
          <CardContainer>
            <GameImageWAM src="https://i.imgur.com/O2UqN7m.jpg"/>
            <div>
              <GameTitle>Whack-A-Mole</GameTitle>
              <GameDescription>There are nine holes in the play area top are filled with virtual moles, which pop up at random. Points are scored by whacking each mole as it appears. If the player does not click a mole within a certain time, it eventually sinks back into its hole with no score. After a designated time limit, the game ends, regardless of the player's score. The final score is based on the number of moles the player struck.</GameDescription>
              <Play>
                <Link to='/whack'>
                  <CardButton>PLAY GAME <i className='far fa-play-circle'/></CardButton>
                </Link>
              </Play>
            </div>  
          </CardContainer>
        </PreviewSection>
        <PreviewHeader>Chat with other users or leave a message!</PreviewHeader>
        <MessageList messages={messages}/>
        <ChatBox onMessageSubmit={(message) => addMessage(message)}/>
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
margin-left: 5rem;
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
const GameImageWAM = styled.img`
height:57%;
width:57%;
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
margin-left: 30px;
`
export default HomePage