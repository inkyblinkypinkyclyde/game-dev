import React from "react"
import styled from "styled-components"
import HomeVideo from "../static/videos/arcade.mp4"
import {Button} from "./Button/Button"

const HomePage = () => {
  return (
    <div>
        <VideoContainer>
            <Video src={HomeVideo} autoPlay loop muted></Video>
            <H1>REACT'R'CADE</H1>
            <P>Welcome!</P>
            <ButtonContainer>
              <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
              <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>PLAY GAME <i className='far fa-play-circle' /></Button>
            </ButtonContainer>
        </VideoContainer>
        <h1>Hello</h1>
    </div>
  )
}

const Video = styled.video`
    object-fit: cover;
    width:100%;
    height:100%;
    position:absolute;
    z-index: -1;
`

// background: url('images/.jpg') center center/cover no-repeat;
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
export default HomePage