import React from "react";
import Grid from "./Grid.js";
import PlayerShips from "./PlayerShips.js";
import ReadyButton from "./ReadyButton.js";

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
                playerGrid={false}
                playerCells={playerOneCells}
                clickHandler={clickHandler}
            />
            <h3>Your waters</h3>
            <Grid
                playerGrid={true}
                playerCells={playerTwoCells}
                clickHandler={clickHandler}
            />
            <ReadyButton
                clickHandler={ }
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