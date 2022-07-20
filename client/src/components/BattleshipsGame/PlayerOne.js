import React from "react";
import Grid from "./Grid.js";
import PlayerShips from "./PlayerShips.js";
import ReadyButton from "./ReadyButton.js";

const PlayerOne = ({
    playerOneShips,
    playerOneCells,
    playerTwoShips,
    playerTwoCells,
    clickHandler,
    readyState,
    handleReadyButton,
    gamePhase }
) => {
    return (
        <>
            <h3>Enemy waters</h3>
            <Grid
                playerGrid={false}
                playerCells={playerTwoCells}
                clickHandler={clickHandler}
            />
            <h3>Your waters</h3>
            <Grid
                playerGrid={true}
                playerCells={playerOneCells}
                clickHandler={clickHandler}
            />
            <ReadyButton
                handleReadyButton={handleReadyButton}
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