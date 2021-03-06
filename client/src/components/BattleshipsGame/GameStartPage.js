import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = styled.h2`
overflow: hidden;
background-color: white;
margin-inline:2rem;
color: black;
text-align: center;
`
const Section = styled.p`
overflow: hidden;
background-color: white;
margin-inline:2rem;
color: black;
text-align: center;
font-size:1.2rem;
`
const History = styled.p`
overflow: hidden;
background-color: white;
margin-inline:2rem;
color: black;
text-align: center;
font-size:1.2rem;
`
const Button = styled.button`
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

const GameStartPage = () => {
    return (

        <> 
        <Header>
        <h2>BattleShips Online Game</h2>
        <Link to='/battleships/player_one'>
                <Button>PLAYER ONE <i className='far fa-play-circle'/></Button>
        </Link>
        <Link to='/battleships/player_two'>
                <Button>PLAYER TWO <i className='far fa-play-circle'/></Button>
        </Link>
        </Header>

        <Section>
        <h3>How To Play</h3>
        <section>Battleship is a war-themed online game for two players in which the opponents 
            try to guess the location of their opponent's warships and sink them.
            Each player hides ships on a virtual grid containing vertical and horizontal
            space coordinates. Players take turns calling out row and column on the
            other player's grid in an attempt to identify a square that contains a ship.

            Each player recieves a grid and three ships of varying lengths.
            Each ship has holes where the "hit" pegs are inserted and a supply of hit and miss markers. 
            The three ships are:
            Cruiser, which has four holes
            Frigate, which has two holes
            Submarine, which has three holes
    

            Before the game starts, each opponent secretly places their own five ships on the virtual grid. 
            Neither player can see their opponent's virtual grid and ship locations.
            Players take one turn at a time firing shots (by selecting a grid coordinate) to attempt to hit the opponent's enemy ships.
            The virtual grid will display if you have been successful in hitting a ship or not
            by showing a ship on fire (hit) or a bit of water showing (miss).

            The first player to sink all three of their opponent's ships wins the game.
        </section>
        </Section>

        <History>
        <h3>The History of BattleShip</h3>
        <article>The game of Battleship is thought to have its origins in the French game L'Attaque played during World War I
        The first commercial version of the game was Salvo, published in 1931 in the United States by the Starex company. 
        Other versions of the game were printed in the 1930s and 1940s.
        All of these early editions of the game consisted of pre-printed pads of paper.
        In 1967 Milton Bradley introduced a version of the game that used plastic boards and pegs. 
        Conceived by Ed Hutchins, play was on pegboards using miniature plastic ships. 
        In 1977, Milton Bradley also released a computerized Electronic Battleship
        a pioneering microprocessor-based toy, capable of generating various sounds.
        </article>    
        </History>
        
        </> 
        
        
    )
}

export default GameStartPage