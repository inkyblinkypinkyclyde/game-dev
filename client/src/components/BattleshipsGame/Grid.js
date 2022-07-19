import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const DivGrid = styled.div`
display: grid;
grid-template-columns: 42px 42px 42px 42px;
`

const Grid = ({
    playerGrid,
    playerCells,
    clickHandler
}) => {

    const displayGrid = playerCells.map((cell) => {
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
            {displayGrid}
        </DivGrid>
    )
}

export default Grid