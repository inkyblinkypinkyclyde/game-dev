import React from "react";
import BattleshipCell from "./BattleshipCell";
import styled from 'styled-components'

const Grid = styled.div`
display: grid;
grid-template-columns: 42px 42px;
`


const BattleshipGrid = ({
    playerGrid,
    playerCells,
    opponentCells,
    onCellClickAttack,
    onCellClickPlace,
    gamePhase
}) => {

    const cellGridPlayer = playerCells.map((cell) => {
        return (
            <BattleshipCell
                playerGrid={playerGrid}
                cell={cell}
                key={cell.number}
                shotAt={cell.shotAt}
                shipPresent={cell.shipPresent}
                onCellClickAttack={onCellClickAttack}
                onCellClickPlace={onCellClickPlace}
                gamePhase={gamePhase}
            />
        )
    })
    const cellGridOpponent = opponentCells.map((cell) => {
        return (
            <BattleshipCell
                playerGrid={playerGrid}
                cell={cell}
                key={cell.number}
                shotAt={cell.shotAt}
                shipPresent={cell.shipPresent}
                onCellClickAttack={onCellClickAttack}
                onCellClickPlace={onCellClickPlace}
                gamePhase={gamePhase}
            />
        )
    })

    return (
        <Grid>
            {playerGrid ? cellGridPlayer : cellGridOpponent}
        </Grid>
    )
}

export default BattleshipGrid