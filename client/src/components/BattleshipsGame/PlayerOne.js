import React from "react";
import Grid from "./Grid.js";
import Ships from "./Ships.js";

const PlayerOne = ({
    playerOneCells,
    playerTwoCells,
    playerOneDeployedShips,
    playerOneUndeployedShips,
    clickHandler }
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
            <Ships
                undeployedShips={playerOneUndeployedShips}
                deployedShips={playerOneDeployedShips}
            />
        </>
    )
}
export default PlayerOne