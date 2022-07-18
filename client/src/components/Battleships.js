import React, { useEffect, useState } from "react";
import BattleshipGrid from "./BattleshipGrid";
import Ships from "./Ships";
import { getGrid } from "../services/gridService";

const Battleships = () => {

    const [gameCells, setGameCells] = useState([]);
    useEffect(()=>{
        getGrid()
        .then((data) => {
            console.log(data);
            setGameCells(data)
        })
    })
    const [opponentCells, setOpponentCells] = useState([])
    const [opponentShips, setopponentShips] = useState([
        {
            //this ship has been placed in locations 30 & 31 already
            name: 'Enemy Frigate',
            _shipId: 1,
            length: [
                {
                    _cellId: 1,
                    location: 30,
                    shotAt: false,
                },
                {
                    _cellId: 2,
                    location: 31,
                    shotAt: false,
                }
            ],
            horizontal: true
        }
    ])
    const [playerShips, setPlayerShips] = useState([
        {
            name: 'Friendly Frigate',
            _shipId: 1,
            length: [
                {
                    _cellId: 1,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: 2,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: true
        },
        {
            name: 'Friendly Submarine',
            _shipId: 2,
            length: [
                {
                    _cellId: 1,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: 2,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: 3,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: false
        }
    ])
    const [activeShip, setActiveShip] = useState(null)
    const [gamePhase, setGamePhase] = useState(0)

    const selectActiveShip = (ship) => {
        setActiveShip(ship)
    }

    const onCellClickAttack = (clickedCell) => {
        const updatedCells = []
        opponentCells.map((cell) => {
            if (clickedCell.number === cell.number) {
                cell.shotAt = true
            }
            updatedCells.push(cell)
            setOpponentCells(updatedCells)
            // setGamePhase(2)
            /// Also send off location to backend
        })
    }

    const setShipLocation = (location, width) => {
        const ship = activeShip
        const returnedLocations = []
        ship.length.map((cell, index) => {
            if (ship.horizontal) {
                let newCell = location + index
                cell.location = newCell
                returnedLocations.push(newCell)
                /// Also send off location to backend
            } else {
                let newCell = (width * index) + location
                cell.location = newCell
                returnedLocations.push(newCell)
                /// Also send off location to backend
            }
        })
        // remove ship from array
        setActiveShip(null)

        return returnedLocations
    }

    const onCellClickPlace = (clickedCell) => {
        const newLocations = setShipLocation(clickedCell.number, 4)
        const updatedCells = []
        playerCells.map((playerCell) => {
            newLocations.map((shipCell) => {
                if (playerCell.number === shipCell) {
                    playerCell.shipPresent = true
                }
            })
            updatedCells.push(playerCell)
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
            <h3>Player ships</h3>
            <Ships
                playerShips={playerShips}
                selectActiveShip={selectActiveShip}
            />
        </>
    )
}

export default Battleships