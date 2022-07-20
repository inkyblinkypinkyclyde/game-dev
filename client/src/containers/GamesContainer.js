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
import Snake from '../components/SnakeGame/Snake';


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

    const canPlaceHorizontalCheck = (index, width, length) => {
        const x = index % width;
        return (x + length <= width)

    }

    const canPlaceVerticalCheck = () => {
        return true
    }
    const removeShipFromList = (player) => {
        const newShipList = []
        if (player === 1) {
            playerOneShips.map((shipInList) => {
                if (shipInList != playerOneActiveShip) {
                    newShipList.push(shipInList)
                }
            })
            setPlayerOneShips(newShipList)
        }
    }

    const placeShipOnHorizontalPlayerOne = (clickedCell, width, shipLength) => {
        console.log(`ship length is:  ` + shipLength)
        const newPlayerCells = [...playerOneCells]
        newPlayerCells.forEach((playerCell, index) => {
            if (playerCell._cellId === clickedCell && canPlaceHorizontalCheck(clickedCell, 4, shipLength)) {
                playerCell.value = 's'
                newPlayerCells[index + 1].value = 's'
                if (shipLength === 3) {
                    newPlayerCells[index + 2].value = 's'
                }
            }
        })
        setPlayerOneCells(newPlayerCells)
        removeShipFromList(1)
    }
    const placeShipOnVerticalPlayerOne = (clickedCell, width, shipLength) => {
        console.log(`ship length is:  ` + shipLength)
        const newPlayerCells = [...playerOneCells]
        newPlayerCells.forEach((playerCell, index) => {
            if (playerCell._cellId === clickedCell && canPlaceVerticalCheck(clickedCell, 4, shipLength)) {
                playerCell.value = 's'
                newPlayerCells[index + 4].value = 's'
                if (shipLength === 3) {
                    newPlayerCells[index + 8].value = 's'
                }
            }
        })
        setPlayerOneCells(newPlayerCells)
    }
    const placeShipOnHorizontalPlayerTwo = (clickedCell, width, shipLength) => {
        console.log(`ship length is:  ` + shipLength)
        const newPlayerCells = [...playerTwoCells]
        newPlayerCells.forEach((playerCell, index) => {
            if (playerCell._cellId === clickedCell && canPlaceHorizontalCheck(clickedCell, 4, shipLength)) {
                playerCell.value = 's'
                // console.log(index)
                newPlayerCells[index + 1].value = 's'
                if (shipLength === 3) {
                    newPlayerCells[index + 2].value = 's'
                }
            }
        })
        setPlayerTwoCells(newPlayerCells)
    }
    const placeShipOnVerticalPlayerTwo = (clickedCell, width, shipLength) => {
        console.log(`ship length is:  ` + shipLength)
        const newPlayerCells = [...playerTwoCells]
        newPlayerCells.forEach((playerCell, index) => {
            if (playerCell._cellId === clickedCell && canPlaceVerticalCheck(clickedCell, 4, shipLength)) {
                playerCell.value = 's'
                // console.log(index)
                newPlayerCells[index + 4].value = 's'
                if (shipLength === 3) {
                    newPlayerCells[index + 8].value = 's'
                }
            }
        })
        setPlayerTwoCells(newPlayerCells)
    }
    const clickHandler = (id) => {
        console.log(`Click handler id is: ` + id)
        if (gamePhase === 0) {
            if (id <= -100 && id >= -109) { setPlayerOneActiveShip(playerOneShips[0]) }
            if (id <= -110 && id >= -119) { setPlayerOneActiveShip(playerOneShips[1]) }
            if (id <= -200 && id >= -209) { setPlayerTwoActiveShip(playerTwoShips[0]) }
            if (id <= -210 && id >= -219) { setPlayerTwoActiveShip(playerTwoShips[1]) }
            if (playerOneActiveShip) {
                if (playerOneActiveShip.horizontal) {
                    placeShipOnHorizontalPlayerOne(id, 4, playerOneActiveShip.length.length)
                } else {
                    placeShipOnVerticalPlayerOne(id, 4, playerOneActiveShip.length.length)
                }
            }
            if (playerTwoActiveShip) {
                if (playerTwoActiveShip.horizontal) {
                    placeShipOnHorizontalPlayerTwo(id, 4, playerTwoActiveShip.length.length)
                } else {
                    placeShipOnVerticalPlayerTwo(id, 4, playerTwoActiveShip.length.length)
                }
            }
        }
    }

    return (
        <MainContainer>
            <Router>
                <NavBar />
                <Routes>

                    <Route path='/' element={<HomePage/>} />
                    <Route path="/snake" element={<Snake/>}/>
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