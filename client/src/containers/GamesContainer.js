import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import About from '../components/About';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import NavBar from '../components/NavBar';
import GameStartPage from "../components/BattleshipsGame/GameStartPage.js";
import PlayerOne from "../components/BattleshipsGame/PlayerOne.js";
import PlayerTwo from "../components/BattleshipsGame/PlayerTwo.js";


const GamesContainer = () => {

    const [playerOneCells, setPlayerOneCells] = useState(
        [
            {
                _cellId: 100,
                value: '_'
            },
            {
                _cellId: 101,
                value: '_'
            },
            {
                _cellId: 102,
                value: '_'
            },
            {
                _cellId: 103,
                value: '_'
            },
            {
                _cellId: 104,
                value: '_'
            },
            {
                _cellId: 105,
                value: '_'
            },
            {
                _cellId: 106,
                value: '_'
            },
            {
                _cellId: 107,
                value: '_'
            },
            {
                _cellId: 108,
                value: '_'
            },
            {
                _cellId: 109,
                value: '_'
            },
            {
                _cellId: 110,
                value: '_'
            },
            {
                _cellId: 111,
                value: '_'
            },
            {
                _cellId: 112,
                value: '_'
            },
            {
                _cellId: 113,
                value: '_'
            },
            {
                _cellId: 114,
                value: '_'
            },
            {
                _cellId: 115,
                value: '_'
            }
        ]
    )
    const [playerTwoCells, setPlayerTwoCells] = useState(
        [
            {
                _cellId: 200,
                value: '_'
            },
            {
                _cellId: 201,
                value: '_'
            },
            {
                _cellId: 202,
                value: '_'
            },
            {
                _cellId: 203,
                value: '_'
            },
            {
                _cellId: 204,
                value: '_'
            },
            {
                _cellId: 205,
                value: '_'
            },
            {
                _cellId: 206,
                value: '_'
            },
            {
                _cellId: 207,
                value: '_'
            },
            {
                _cellId: 208,
                value: '_'
            },
            {
                _cellId: 209,
                value: '_'
            },
            {
                _cellId: 210,
                value: '_'
            },
            {
                _cellId: 211,
                value: '_'
            },
            {
                _cellId: 212,
                value: '_'
            },
            {
                _cellId: 213,
                value: '_'
            },
            {
                _cellId: 214,
                value: '_'
            },
            {
                _cellId: 215,
                value: '_'
            }
        ]
    )
    const [playerOneShips, setPlayerOneShips] = useState([
        {
            name: 'Frigate',
            _shipId: 11,
            length: [
                {
                    _cellId: -100,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -101,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: true
        },
        {
            name: 'Submarine',
            _shipId: 12,
            length: [
                {
                    _cellId: -110,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -111,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -112,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: false
        }
    ])
    const [playerTwoShips, setPlayerTwoShips] = useState([
        {
            name: 'Frigate',
            _shipId: 21,
            length: [
                {
                    _cellId: -200,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -201,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: true
        },
        {
            name: 'Submarine',
            _shipId: 22,
            length: [
                {
                    _cellId: -211,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -212,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -213,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: false
        }
    ])
    const [playerOneActiveShip, setPlayerOneActiveShip] = useState(null)
    const [playerTwoActiveShip, setPlayerTwoActiveShip] = useState(null)
    const [gamePhase, setGamePhase] = useState(0)

    const placePlayerOneShipAt = (id) => {
        // console.log(id)
        const newCells = []
        playerOneCells.map((gridCell, index) => {
            if (playerOneActiveShip.horizontal) {
                if (gridCell._cellId === id) {
                    playerOneActiveShip.length.map((shipCell) => {
                        // console.log(`gridCell id is ` + gridCell._cellId)
                        gridCell.value = 's'
                    })
                }
            }
            newCells.push(gridCell)
        })
    }
    const canPlaceHorizontalCheck = (index, width, length) => {
        const x = index % width;
        return (x + length <= width)

    }
    const placeShipOnHorizontal = (clickedCell, width, shipLength) => {
        // make empty list for new cells
        // loop through player cells
        // match player cell to clicked cell
        // if player cell is the same as clicked cell:
        //make player cell value into 's' AND make the next player cell value into 's' for the length of the ship
        // push the cell into the empty list
        // assign the empty list to the player cell list in state

        // (index % width) = x
        // if x + length > width


        const newPlayerCells = [...playerOneCells]
        newPlayerCells.forEach((playerCell, index) => {
            if (playerCell._cellId === clickedCell && canPlaceHorizontalCheck(clickedCell, 4, shipLength)) {
                playerCell.value = 's'
                newPlayerCells[index + 1].value = 's'
                if (shipLength === 3) {
                    newPlayerCells[index + 2].value = 's'
                }
                // console.log(playerCell)
                console.log(newPlayerCells[index])
            }
        })
        console.log(playerOneCells)
        console.log(newPlayerCells)
        setPlayerOneCells(newPlayerCells)
    }

    const clickHandler = (id) => {
        console.log(`Click handler id is: ` + id)
        if (gamePhase === 0) {
            if (id <= -100 && id >= -109) { setPlayerOneActiveShip(playerOneShips[0]) }
            if (id <= -110 && id >= -119) { setPlayerOneActiveShip(playerOneShips[1]) }
            if (id <= -200 && id >= -209) { setPlayerTwoActiveShip(playerTwoShips[0]) }
            if (id <= -210 && id >= -219) { setPlayerTwoActiveShip(playerTwoShips[1]) }
            if (playerOneActiveShip) { placeShipOnHorizontal(id, 4, playerOneActiveShip.length.length) }
            // if (playerTwoActiveShip) { placePlayerTwoShipAt(id) }
        }
    }

    return (
        <MainContainer>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/battleships/start/' element={<GameStartPage />} />
                    <Route
                        path='/battleships/player_one'
                        element={<PlayerOne
                            playerOneShips={playerOneShips}
                            playerOneActiveShip={playerOneActiveShip}
                            playerOneCells={playerOneCells}
                            playerTwoShips={playerTwoShips}
                            playerTwoActiveShip={playerTwoActiveShip}
                            playerTwoCells={playerTwoCells}
                            gamePhase={gamePhase}
                            clickHandler={clickHandler}
                        // cellColor={cellColor}
                        />}
                    />
                    <Route
                        path='/battleships/player_two'
                        element={<PlayerTwo
                            playerOneShips={playerOneShips}
                            playerOneActiveShip={playerOneActiveShip}
                            playerOneCells={playerOneCells}
                            playerTwoShips={playerTwoShips}
                            playerTwoActiveShip={playerTwoActiveShip}
                            playerTwoCells={playerTwoCells}
                            gamePhase={gamePhase}
                            clickHandler={clickHandler}
                        // cellColor={cellColor}
                        />}
                    />
                    <Route path='/about' element={< About />} />
                </Routes>
                <Footer />
            </Router>
        </MainContainer>

    )
}

const MainContainer = styled.div`

`

export default GamesContainer