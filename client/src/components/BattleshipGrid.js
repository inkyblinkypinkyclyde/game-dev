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
    onCellClickPlace
}) => {

    // const cellGrid = () => {
    //     if (playerGrid === true) {
    //         playerCells.map((cell1) => {
    //             return (
    //                 <BattleshipCell
    //                     playerGrid={playerGrid}
    //                     cell1={cell1}
    //                     key={cell1.number}
    //                     shotAt={cell1.shotAt}
    //                     shipPresent={cell1.shipPresent}
    //                     onCellClickAttack={onCellClickAttack}
    //                     onCellClickPlace={onCellClickPlace}
    //                 />
    //             )
    //         })
    //     } else {
    //         opponentCells.map((cell2) => {
    //             return (
    //                 <BattleshipCell
    //                     playerGrid={playerGrid}
    //                     cell2={cell2}
    //                     key={cell2.number}
    //                     shotAt={cell2.shotAt}
    //                     shipPresent={cell2.shipPresent}
    //                     onCellClickAttack={onCellClickAttack}
    //                     onCellClickPlace={onCellClickPlace}
    //                 />
    //             )
    //         })
    //     }
    // }

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