import React from "react";
import Grid from "./Grid.js";
import PlayerShips from "./PlayerShips.js";

const PlayerOne = ({
    playerOneShips,
    playerOneCells,
    playerTwoShips,
    playerTwoCells,
    clickHandler,
    gamePhase }
) => {
    return (
        <>
            <h3>Enemy waters</h3>
            <Grid
                playerGrid={false}
                playerOneCells={playerOneCells}
                playerTwoCells={playerTwoCells}
                clickHandler={clickHandler}
            />
            <h3>Your waters</h3>
            <Grid
                playerGrid={true}
                playerOneCells={playerOneCells}
                playerTwoCells={playerTwoCells}
                clickHandler={clickHandler}
            />
            <PlayerShips
                playerShips={true}
                playerOneShips={playerOneShips}
                playerTwoShips={playerTwoShips}
                clickHandler={clickHandler}
            />
        </>
    )
}
export default PlayerOne