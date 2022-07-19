import React from "react";
import { Link } from "react-router-dom";

const GameStartPage = () => {
    return (
        <> 
            <h1>I'm the start page</h1>
            <Link to='/battleships/player_one'>
                <button>PLAYER ONE <i className='far fa-play-circle'/></button>
            </Link>
            <Link to='/battleships/player_two'>
                <button>PLAYER TWO <i className='far fa-play-circle'/></button>
            </Link>
        </>   
    )
}

export default GameStartPage