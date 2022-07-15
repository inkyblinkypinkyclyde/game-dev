import React, { useState } from "react";
import BattleshipGrid from "./BattleshipGrid";

const Battleships = () => {

    const [playerCells, setPlayerCells] = useState(
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
    const [opponentCells, setOpponentCells] = useState(
        [
            {
                number: 5,
                shotAt: false,
                shipPresent: true,
            },
            {
                number: 6,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 7,
                shotAt: false,
                shipPresent: true,
            },
            {
                number: 8,
                shotAt: false,
                shipPresent: false,
            }
        ]
    )
    const [playerShips, setPlayerShips] = useState([
        {
            name: 'Friendly Frigate',
            locations: [],
            shipHealth: 2,
            horizontal: true
        }
    ])
    const [opponentShips, setopponentShips] = useState([
        {
            name: 'enemy Frigate',
            locations: [],
            shipHealth: 2,
            horizontal: true
        }
    ])
    const [activeShip, setActiveShip] = useState(null)
    const [gamePhase, setGamePhase] = useState(0)

    const onCellClickAttack = (clickedCell) => {
        const updatedCells = []
        opponentCells.map((cell) => {
            if (clickedCell.number === cell.number) {
                cell.shotAt = true
            }
            updatedCells.push(cell)
            setOpponentCells(updatedCells)
            setGamePhase(2)
        })
    }

    const onCellClickPlace = (clickedCell) => {
        console.log(clickedCell)
        const updatedCells = []
        playerCells.map((cell) => {
            if (clickedCell.number === cell.number) {
                cell.shipPresent = true
            }
            updatedCells.push(cell)
            setPlayerCells(updatedCells)
        })
    }
    return (
        <>
            <h1>Battleships</h1>
            <h3>Opponent Grid</h3>
            <BattleshipGrid
                gamePhase={gamePhase}
                playerGrid={false}
                playerCells={playerCells}
                opponentCells={opponentCells}
                onCellClickAttack={onCellClickAttack}
                onCellClickPlace={onCellClickPlace}
            />
            <h3>Player Grid</h3>
            <BattleshipGrid
                gamePhase={gamePhase}
                playerGrid={true}
                playerCells={playerCells}
                opponentCells={opponentCells}
                onCellClickAttack={onCellClickAttack}
                onCellClickPlace={onCellClickPlace}
            />
        </>
    )
}

export default Battleships