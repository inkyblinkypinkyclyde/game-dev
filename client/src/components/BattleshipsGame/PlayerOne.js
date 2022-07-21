import React from "react";
import styled from "styled-components";
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
        <Div>
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
        </Div>
    )
}

const Div = styled.div`
margin-left: 2rem;
`

export default PlayerOne