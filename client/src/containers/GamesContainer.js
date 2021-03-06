import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import About from '../components/About';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import NavBar from '../components/NavBar';
import GameStartPage from "../components/BattleshipsGame/GameStartPage.js";
import PlayerOne from "../components/BattleshipsGame/PlayerOne.js";
import PlayerTwo from "../components/BattleshipsGame/PlayerTwo.js";
import io from 'socket.io-client'
import Snake from '../components/SnakeGame/Snake';
import Whack from '../components/WhackGame/App';

const socket = io.connect("http://localhost:3001")

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
        },
        {
            name: 'Cruiser',
            _shipId: 13,
            length: [
                {
                    _cellId: -120,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -121,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -122,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -123,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: true
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
        },
        {
            name: 'Cruiser',
            _shipId: 23,
            length: [
                {
                    _cellId: -220,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -221,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -222,
                    location: null,
                    shotAt: false,
                },
                {
                    _cellId: -223,
                    location: null,
                    shotAt: false,
                }
            ],
            horizontal: true
        }
    ])

    const [playersReady, setPlayersReady] = useState(false)

    const [playerOneHits, setPlayerOneHits] = useState(9)
    const [playerTwoHits, setPlayerTwoHits] = useState(9)

    useEffect(() => {
        socket.on('receive_player1', (data) => {
            setPlayerOneCells(data.newPlayerCells)
        })
        socket.on('receive_player2', (data) => {
            setPlayerTwoCells(data.newPlayerCells)
        })
        socket.on('receive_player1_ships', (data) => {
            setPlayerOneShips(data.newShipList)
        })
        socket.on('receive_player2_ships', (data) => {
            setPlayerTwoShips(data.newShipList)
        })
        socket.on('receive_player1_hits', (data) => {
            setPlayerOneShips(data.newShipList)
        })
        socket.on('receive_player2_hits', (data) => {
            setPlayerTwoShips(data.newShipList)
        })
        socket.on('receive_gamephase', (data) => {
            setGamePhase(data.phase)
        })
    }, [socket])

    useEffect(() => {
        console.log('use effect triggered')
        console.log(`player one ships left: ` + playerOneShips.length)
        console.log(`player two ships left: ` + playerTwoShips.length)
        // setGamePhaseToOne()
        if (playerOneShips.length === 0 && playerTwoShips.length === 0) { setGamePhase(1) }
    }, [playerTwoShips, playerOneShips])


    const [playerOneActiveShip, setPlayerOneActiveShip] = useState(null)
    const [playerTwoActiveShip, setPlayerTwoActiveShip] = useState(null)
    const [gamePhase, setGamePhase] = useState(0)



    const registerHitOnPlayerOne = () => {
        const newPlayerOneHits = playerOneHits++
        setPlayerOneHits(newPlayerOneHits)
    }
    const registerHitOnPlayerTwo = () => {
        const newPlayerTwoHits = playerOneHits++
        setPlayerTwoHits(newPlayerTwoHits)
    }



    const grid = [
        1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 12,
        13, 14, 15, 16
    ];

    const height = 4;
    const width = 4;

    function remainingInRow(index, length) {
        const fromStartOfRow = index % width;
        const remaining = width - fromStartOfRow;
        return remaining >= length;
    }

    function remainingInColumn(index, length) {
        const fromStartOfColumn = Math.floor(index / height);
        const remaining = height - fromStartOfColumn;
        return remaining >= length;
    }

    let index;

    index = grid.indexOf(7)
    const canPlaceWidth3At7 = remainingInRow(index, 3);
    // console.log({ canPlaceWidth3At7 });

    index = grid.indexOf(10)
    const canPlaceWidth3At10 = remainingInRow(index, 3);
    // console.log({ canPlaceWidth3At10 });

    index = grid.indexOf(3);
    const canPlaceHeight3At3 = remainingInColumn(index, 3);
    // console.log({ canPlaceHeight3At3 })

    index = grid.indexOf(11);
    const canPlaceHeight3At11 = remainingInColumn(index, 3);
    // console.log({ canPlaceHeight3At11 });


    const canPlaceHorizontalCheck = (index, width, length) => {
        const x = index % width;
        return (x + length <= width)
    }

    const canPlaceVerticalCheck = (index, height, length) => {
        console.log(index)
        const x = ((height * height) - 1) - ((length - 1) * height)
        return (index - 200 < x)
    }

    const setGamePhaseToOne = () => {
        console.log('here')
        if (playerOneShips === [] && playerTwoShips === []) { setGamePhase(1) }
        if (playerOneShips.length === 1 && playerTwoShips === []) { setGamePhase(1) }
        if (playerOneShips === [] && playerTwoShips.length === 1) { setGamePhase(1) }
        setGamePhase(1)
    }

    const removeShipFromList = (player) => {
        const newShipList = []
        if (player === 1) {
            playerOneShips.map((shipInList) => {
                if (shipInList !== playerOneActiveShip) {
                    newShipList.push(shipInList)
                }
            })
            setPlayerOneShips(newShipList)
            socket.emit('send_player1_ships', { newShipList })
        } else {
            playerTwoShips.map((shipInList) => {
                if (shipInList !== playerTwoActiveShip) {
                    newShipList.push(shipInList)
                }
            })
            setPlayerTwoShips(newShipList)
            socket.emit('send_player2_ships', { newShipList })
        }
    }
    const placeShipOnHorizontalPlayerOne = (clickedCell, width, shipLength) => {
        const newPlayerCells = [...playerOneCells]
        newPlayerCells.forEach((playerCell, index) => {
            if (playerCell._cellId === clickedCell && canPlaceHorizontalCheck(clickedCell, 4, shipLength)) {

                playerCell.value = 's'
                newPlayerCells[index + 1].value = 's'
                if (shipLength === 3) {
                    newPlayerCells[index + 2].value = 's'
                }
                if (shipLength === 4) {
                    newPlayerCells[index + 2].value = 's'
                    newPlayerCells[index + 3].value = 's'
                }

                if (playerOneShips.length <= 1 && playerTwoShips <= 1) {
                    console.log('now')
                    setGamePhaseToOne()
                }

                setPlayerOneCells(newPlayerCells)
                socket.emit('send_player1', { newPlayerCells })
                removeShipFromList(1)
                setPlayerOneActiveShip(null)

            }
        })
        // 
    }
    const placeShipOnVerticalPlayerOne = (clickedCell, width, shipLength) => {
        const newPlayerCells = [...playerOneCells]
        newPlayerCells.forEach((playerCell, index) => {
            if (playerCell._cellId === clickedCell && canPlaceVerticalCheck(index, 4, shipLength)) {
                console.log('here2')
                playerCell.value = 's'
                newPlayerCells[index + 4].value = 's'
                if (shipLength === 3) {
                    newPlayerCells[index + 8].value = 's'
                }
                if (shipLength === 4) {
                    newPlayerCells[index + 8].value = 's'
                    newPlayerCells[index + 12].value = 's'
                }

                if (playerOneShips.length <= 1 && playerTwoShips <= 1) {
                    console.log('now')
                    setGamePhaseToOne()
                }

                setPlayerOneCells(newPlayerCells)
                socket.emit('send_player1', { newPlayerCells })
                removeShipFromList(1)
                setPlayerOneActiveShip(null)

            }
        })
        // setGamePhaseToOne()
    }
    const placeShipOnHorizontalPlayerTwo = (clickedCell, width, shipLength) => {
        // console.log(`ship length is:  ` + shipLength)
        const newPlayerCells = [...playerTwoCells]
        newPlayerCells.forEach((playerCell, index) => {
            if (playerCell._cellId === clickedCell && canPlaceHorizontalCheck(clickedCell, 4, shipLength)) {
                playerCell.value = 's'
                newPlayerCells[index + 1].value = 's'
                if (shipLength === 3) {
                    newPlayerCells[index + 2].value = 's'
                }
                if (shipLength === 4) {
                    newPlayerCells[index + 3].value = 's'
                    newPlayerCells[index + 2].value = 's'
                }

                if (playerOneShips.length <= 1 && playerTwoShips <= 1) {
                    console.log('now')
                    setGamePhaseToOne()
                }

                setPlayerTwoCells(newPlayerCells)
                socket.emit('send_player2', { newPlayerCells })
                removeShipFromList(2)
                setPlayerTwoActiveShip(null)

            }

        })
        // setGamePhaseToOne()
    }
    const placeShipOnVerticalPlayerTwo = (clickedCell, width, shipLength) => {
        // console.log(`ship length is:  ` + shipLength)
        const newPlayerCells = [...playerTwoCells]
        newPlayerCells.forEach((playerCell, index) => {
            if (playerCell._cellId === clickedCell && canPlaceVerticalCheck(clickedCell, 4, shipLength)) {
                playerCell.value = 's'
                newPlayerCells[index + 4].value = 's'
                if (shipLength === 3) {
                    newPlayerCells[index + 8].value = 's'
                }
                if (shipLength === 4) {
                    newPlayerCells[index + 8].value = 's'
                    newPlayerCells[index + 12].value = 's'
                }

                if (playerOneShips.length <= 1 && playerTwoShips <= 1) {
                    console.log('now')
                    setGamePhaseToOne()
                }


                setPlayerTwoCells(newPlayerCells)
                socket.emit('send_player2', { newPlayerCells })
                removeShipFromList(2)
                setPlayerTwoActiveShip(null)

            }

        })
        // setGamePhaseToOne()
    }
    const findShipById = (player, _shipId) => {
        if (player === 1) {
            const foundShip = playerOneShips.find(shipInArray => {
                return shipInArray._shipId === _shipId
            })
            console.log(foundShip)
            return foundShip
        } else {
            const foundShip = playerTwoShips.find(shipInArray => {
                return shipInArray._shipId === _shipId
            })
            console.log(foundShip)
            return foundShip
        }
    }
    const takeShotAtPlayerOne = (id) => {
        const newPlayerCells = playerOneCells.map((cell) => {
            const newCell = { ...cell }
            if (newCell._cellId === id) {
                if (newCell.value === '_') {
                    newCell.value = 'm'
                }
                if (newCell.value === 's') {
                    newCell.value = 'h'
                }
            }
            return newCell
        })
        setPlayerOneCells(newPlayerCells)
        socket.emit('send_player1', { newPlayerCells })
        const phase = 1
        setGamePhase(phase)
        socket.emit('send_gamephase', { phase })
    }
    const takeShotAtPlayerTwo = (id) => {
        const newPlayerCells = playerTwoCells.map((cell) => {
            const newCell = { ...cell }
            if (newCell._cellId === id) {
                if (newCell.value === '_') {
                    newCell.value = 'm'
                }
                if (newCell.value === 's') {
                    newCell.value = 'h'
                }
            }
            return newCell
        })
        setPlayerTwoCells(newPlayerCells)
        socket.emit('send_player2', { newPlayerCells })
        const phase = 2
        setGamePhase(phase)
        socket.emit('send_gamephase', { phase })
    }

    const handleReadyButton = () => {
        console.log('pressed button')
        if (playerOneCells.length === 0)
        setPlayerOneCells([])
        if (playerTwoCells.length === 0)
        setPlayerTwoCells([])

    }

    const clickHandler = (id) => {
        console.log(`Click handler id is: ` + id)
        if (gamePhase === 0) {
            if (id <= -100 && id >= -109) {
                const foundShip = findShipById(1, 11)
                setPlayerOneActiveShip(foundShip)
            }
            if (id <= -110 && id >= -119 && gamePhase === 0) { setPlayerOneActiveShip(findShipById(1, 12)) }
            if (id <= -120 && id >= -129 && gamePhase === 0) { setPlayerOneActiveShip(findShipById(1, 13)) }
            if (id <= -200 && id >= -209 && gamePhase === 0) { setPlayerTwoActiveShip(findShipById(2, 21)) }
            if (id <= -210 && id >= -219 && gamePhase === 0) { setPlayerTwoActiveShip(findShipById(2, 22)) }
            if (id <= -220 && id >= -229 && gamePhase === 0) { setPlayerTwoActiveShip(findShipById(2, 23)) }
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
        } else {
            if (gamePhase === 1 && id >= 200 && id < 299) {
                //player one turn
                takeShotAtPlayerTwo(id)
                setGamePhase(2)
            }
            if (gamePhase === 2 && id >= 100 && id <= 199) {
                //player two turn
                console.log('shot fired from player one to player two')
                takeShotAtPlayerOne(id)
                setGamePhase(1)
            }
        }
    }
    return (
        <MainContainer>
            <Router>
                <NavBar />
                <Routes>

                    <Route path='/' element={<HomePage />} />
                    <Route path="/snake" element={<Snake />} />
                    <Route path="/whack" element={<Whack />} />
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
                            handleReadyButton={handleReadyButton}
                            
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
                            handleReadyButton={handleReadyButton}

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