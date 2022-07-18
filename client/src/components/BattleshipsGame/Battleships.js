import React, { useState } from "react";
import BattleshipGrid from "./BattleshipGrid";
import Ships from "./Ships";

const Battleships = () => {

    const [playerCells, setPlayerCells] = useState(
        [
            {
                number: 0,
                shotAt: false,
                shipPresent: false,
            },
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
            },
            {
                number: 5,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 6,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 7,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 8,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 9,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 10,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 11,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 12,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 13,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 14,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 15,
                shotAt: false,
                shipPresent: false,
            }
        ]
    )
    const [opponentCells, setOpponentCells] = useState(
        [
            {
                number: 16,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 17,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 18,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 19,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 20,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 21,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 22,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 23,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 24,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 25,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 26,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 27,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 28,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 29,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 30,
                shotAt: false,
                shipPresent: true,
            },
            {
                number: 31,
                shotAt: false,
                shipPresent: true,
            }
        ]
    )
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

    const checkAllShipsPlaced = () => {
        const checkShipsPlaced = []
        playerShips.forEach(ship => checkShipsPlaced.push(ship.length[0].location))
        console.log(checkShipsPlaced.includes(null))
        if (checkShipsPlaced.includes(null) === false){
            setGamePhase(1)
            console.log(checkShipsPlaced)
        }
    }

    const gameLoop = () => {
        checkAllShipsPlaced()
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
            <p>Place Ships then press start game when ready:</p>
            <button onClick={gameLoop}>Start Game</button>
        </>
    )
}

export default Battleships