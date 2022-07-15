import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"

const NavList =styled.ul`
display:flex;
background: #ffffff;
justify-content: space-evenly;
list-style: none;
`

const Heading = styled.h1`
display:flex;
justify-content: center;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: #054569;
`
const NavBar = () => {
    return (
        <><Heading>React'R'cade</Heading>
            <NavList>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
            
                <li>
                    <StyledLink to="/battleships">Battleships</StyledLink>
                </li>

                <li>
                    <StyledLink to="/about">About</StyledLink>
                </li>
            </NavList> 
        </>
    )
}

export default NavBar