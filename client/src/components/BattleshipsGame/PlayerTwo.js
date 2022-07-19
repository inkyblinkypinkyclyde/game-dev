import React from "react";
import Grid from "./Grid.js";
import PlayerShips from "./PlayerShips.js";

const PlayerTwo = ({
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
                playerGrid={true}
                playerOneCells={playerOneCells}
                playerTwoCells={playerTwoCells}
                clickHandler={clickHandler}
            />
            <h3>Your waters</h3>
            <Grid
                playerGrid={false}
                playerOneCells={playerOneCells}
                playerTwoCells={playerTwoCells}
                clickHandler={clickHandler}
            />
            <PlayerShips
                playerShips={false}
                playerOneShips={playerOneShips}
                playerTwoShips={playerTwoShips}
                clickHandler={clickHandler}
            />
        </>
    )
}
export default PlayerTwo