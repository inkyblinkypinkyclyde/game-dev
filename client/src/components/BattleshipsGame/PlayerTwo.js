import React from "react";
import styled from "styled-components";
import Grid from "./Grid.js";
import PlayerShips from "./PlayerShips.js";
import ReadyButton from "./ReadyButton.js";

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
        <Div>
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
                readyState={readyState}
                handleReadyButton={handleReadyButton}
            />
            <PlayerShips
                playerShips={false}
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

export default PlayerTwo