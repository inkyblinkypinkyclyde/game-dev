import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import HomeVideo from "../static/videos/arcade.mp4"


const HomePage = () => {
  return (
    <div>
        <VideoContainer>
            <Video src={HomeVideo} autoPlay loop muted></Video>
            <H1>REACT'R'CADE</H1>
            <P>Welcome!</P>
            <ButtonContainer>
            <Link to='/about' className='btn-mobile'>
              <Button1>GET STARTED</Button1>
            </Link>   
            <Link to='/about' className='btn-mobile'> 
              <Button2>PLAY GAME <i className='far fa-play-circle'/></Button2>
            </Link>  
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
transition: all 0.3s ease-out;
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
`
export default HomePage