import React from "react";
import BattleshipCell from "./BattleshipCell";
import styled from 'styled-components'

const Grid = styled.div`
display: grid;
grid-template-columns: 42px 42px;
`


const BattleshipGrid = ({ cells, onCellClick }) => {
    const cellGrid = cells.map((cell) => {
        return (
            <BattleshipCell
                cell={cell}
                key={cell.number}
                shotAt={cell.shotAt}
                shipPresent={cell.shipPresent}
                onCellClick={onCellClick}
            />
        )
    })

    return (
        <Grid>
            {cellGrid}
        </Grid>
    )
}

export default BattleshipGrid