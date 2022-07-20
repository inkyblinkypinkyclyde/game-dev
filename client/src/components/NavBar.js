import React, { useState } from 'react'
import {Link} from "react-router-dom"
import styled, {createGlobalStyle} from "styled-components"
import GeckoFont from '../static/fonts/GeckoFont.ttf'


const NavBar = () => {

    const [styling, setStyling] = useState(false)

    return (
        <Nav>
            <GlobalStyle/><Logo href='/'>React<span>'R'</span>cade</Logo>
            <Hamburger onClick={() => setStyling(!styling)}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
            <Menu styling={styling}>
                <MenuLink to='/'>Home</MenuLink>
                <MenuLink to='/snake'>Snake</MenuLink>
                <MenuLink to='/whack'>Whack</MenuLink>
                <MenuLink to='/battleships/start'>Battleships</MenuLink>
                <MenuLink to='/about'>About</MenuLink>
            </Menu>
        </Nav>
    )
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Gecko';
        src: url(${GeckoFont}) format('truetype');
        font-display: auto;
    }
`

const Nav = styled.div`
padding: 0 2rem;
display:flex;
justify-content:space-between;
align-items: center;
flex-wrap: wrap;
background-color: #00BBF9;
`

const Hamburger = styled.div`
display: none;
flex-direction: column;
cursor: pointer;
span{
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
}

@media (max-width: 768px) {
    display: flex;
}
`

const Menu = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
position: relative;

@media (max-width: 768px) {
    overflow: hidden;
    flex-direction:column;
    width: 100%;
    max-height: ${({styling}) => (styling ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
}
`

const MenuLink = styled(Link)`
padding: 1rem 2rem;
cursor: pointer;
text-align: center;
text-decoration: none;
color: white;
transition: all 0.2s ease-in;
font-size: 1.5rem;
font-weight: 700;
&:hover {
    color: red;
}
`

const Logo = styled.a`
font-family: 'Gecko';
 padding: 1rem 0;
 color: white;
 text-decoration: none;
 font-weight: 200;
 font-size: 3rem;
 span {
     font-weight: 300;
     font-size: 3rem;
}
`

export default NavBar
