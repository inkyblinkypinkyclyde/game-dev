import React from "react";
import Grid from "./Grid.js";


const PlayerTwo = ({
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
                playerCells={playerOneCells}
                clickHandler={clickHandler}
            />
            <h3>Your waters</h3>
            <Grid
                playerGrid={true}
                playerCells={playerTwoCells}
                clickHandler={clickHandler}
            />
        </>
    )
}
export default PlayerTwo