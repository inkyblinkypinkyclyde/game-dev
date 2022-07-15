import React, { useState } from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"

// const NavList =styled.ul`
// display:flex;
// justify-content: space-evenly;
// list-style: none;
// padding: 1rem;
// `

// const Styledh1 = styled.h1`
// display:flex;
// justify-content: center;
// margin-left: 2rem;
// `

// const StyledLink = styled(Link)`
// text-decoration: none;
// color: #054569;
// padding: 2rem;
// font-weight: bold;`



const NavBar = () => {

    const [styling, setStyling] = useState(false)

    return (
        <Nav>
            <Logo href='/'>React<span>'R'</span>cade</Logo>
            <Hamburger onClick={() => setStyling(!styling)}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
            <Menu styling={styling}>
                <MenuLink to='/'>Home</MenuLink>
                <MenuLink to='/battleships'>Battleships</MenuLink>
                <MenuLink to='/about'>About</MenuLink>
            </Menu>
        </Nav>
    )
}

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
transition: all 0.3s ease-in;
font-size: 1rem;
&:hover {
    color: dodgerblue;
}
`

const Logo = styled.a`
 padding: 1rem 0;
 color: white;
 text-decoration: none;
 font-weight: 700;
 font-size: 2.5rem;
 span {
     font-weight: 800;
     font-size: 2.5rem;
 }
`

export default NavBar

{/* <ul>
<li>
    <Link to="/">Home</Link>
</li>

<li>
    <Link to="/battleships">Battleships</Link>
</li>

<li>
    <Link to="/about">About</Link>
</li>
</ul>  */}