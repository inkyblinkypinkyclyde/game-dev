import React from "react";
import BattleshipCell from "./BattleshipCell";
import styled from 'styled-components'

const Grid = styled.div`
display: grid;
grid-template-columns: 42px 42px;
`


const BattleshipGridOpponent = ({ cells, onCellClickAttack }) => {
    const cellGrid = cells.map((cell) => {
        return (
            <BattleshipCell
                cell={cell}
                key={cell.number}
                shotAt={cell.shotAt}
                shipPresent={cell.shipPresent}
                onCellClickAttack={onCellClickAttack}
            />
        )
    })

    return (
        <Grid>
            {cellGrid}
        </Grid>
    )
}

export default BattleshipGridOpponent