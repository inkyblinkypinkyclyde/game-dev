import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const DivGrid = styled.div`
display: grid;
grid-template-columns: 42px 42px 42px 42px;
`

const Grid = ({
    playerGrid,
    playerOneCells,
    playerTwoCells,
    clickHandler
}) => {

    const displayPlayerOneGrid = playerOneCells.map((cell) => {
        return (
            <Cell
                key={cell._cellId}
                cell={cell}
                value={cell.value}
                playerGrid={playerGrid}
                clickHandler={clickHandler}
            />
        )
    })
    const displayPlayerTwoGrid = playerTwoCells.map((cell) => {
        return (
            <Cell
                key={cell._cellId}
                cell={cell}
                value={cell.value}
                playerGrid={playerGrid}
                clickHandler={clickHandler}
            />
        )
    })

    return (
        <DivGrid>
            {playerGrid ? displayPlayerOneGrid : displayPlayerTwoGrid}
        </DivGrid>
    )
}

export default Grid