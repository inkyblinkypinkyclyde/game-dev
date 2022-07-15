import React, { useState } from "react";
import BattleshipGrid from "./BattleshipGrid";

const Battleships = () => {

    const [cells, setCells] = useState(
        [
            {
                number: 1,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 2,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 3,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 4,
                shotAt: false,
                shipPresent: false,
            }
        ]
    )
    const onCellClick = (clickedCell) => {
        const updatedCells = []
        cells.map((cell) => {
            if (clickedCell.number === cell.number) {
                cell.shotAt = true
            }
            updatedCells.push(cell)
            setCells(updatedCells)
        })

    }

    return (
        <>
            <h1>Battleships</h1>
            <BattleshipGrid
                cells={cells}
                onCellClick={onCellClick}
            />
        </>
    )
}

export default Battleships