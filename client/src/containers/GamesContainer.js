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
import Player from '../models/player.js'

const socket = io.connect("http://localhost:3001")

const GamesContainer = () => {
    const playerOne = new Player('Alice')
    const playerTwo = new Player('Bob')
    playerOne.startGame(10)
    playerTwo.startGame(10)

    const [playerOneCells, setPlayerOneCells] = useState(playerOne.playerGrid.cells)
    const [playerTwoCells, setPlayerTwoCells] = useState(playerTwo.playerGrid.cells)
    const [playerOneDeployedShips, setPlayerOneDeployedShips] = useState(playerOne.playerFleet.deployed)
    const [playerOneUndeployedShips, setPlayerOneUndeployedShips] = useState(playerOne.playerFleet.undeployed)
    const [playerTwoDeployedShips, setPlayerTwoDeployedShips] = useState(playerTwo.playerFleet.deployed)
    const [playerTwoUndeployedShips, setPlayerTwoUndeployedShips] = useState(playerTwo.playerFleet.undeployed)

    // const [playersReady, setPlayersReady] = useState(false)



    // useEffect(() => {
    //     socket.on('receive_player1', (data) => {
    //         setPlayerOneCells(data.newPlayerCells)
    //     })
    //     socket.on('receive_player2', (data) => {
    //         setPlayerTwoCells(data.newPlayerCells)
    //     })
    //     socket.on('receive_player1_ships', (data) => {
    //         setPlayerOneShips(data.newShipList)
    //     })
    //     socket.on('receive_player2_ships', (data) => {
    //         setPlayerTwoShips(data.newShipList)
    //     })
    //     socket.on('receive_player1_hits', (data) => {
    //         setPlayerOneShips(data.newShipList)
    //     })
    //     socket.on('receive_player2_hits', (data) => {
    //         setPlayerTwoShips(data.newShipList)
    //     })
    //     socket.on('receive_gamephase', (data) => {
    //         setGamePhase(data.phase)
    //     })
    // }, [socket])

    // useEffect(() => {
    //     console.log('use effect triggered')
    //     console.log(`player one ships left: ` + playerOneShips.length)
    //     console.log(`player two ships left: ` + playerTwoShips.length)
    //     // setGamePhaseToOne()
    //     if (playerOneShips.length === 0 && playerTwoShips.length === 0) { setGamePhase(1) }
    // }, [playerTwoShips, playerOneShips])


    // const [playerOneActiveShip, setPlayerOneActiveShip] = useState(null)
    // const [playerTwoActiveShip, setPlayerTwoActiveShip] = useState(null)
    // const [gamePhase, setGamePhase] = useState(0)



    // const registerHitOnPlayerOne = () => {
    //     const newPlayerOneHits = playerOneHits++
    //     setPlayerOneHits(newPlayerOneHits)
    // }
    // const registerHitOnPlayerTwo = () => {
    //     const newPlayerTwoHits = playerOneHits++
    //     setPlayerTwoHits(newPlayerTwoHits)
    // }




    // const clickHandler = (id) => {
    //     console.log(`Click handler id is: ` + id)
    //     if (gamePhase === 0) {
    //         if (id <= -100 && id >= -109) {
    //             const foundShip = findShipById(1, 11)
    //             setPlayerOneActiveShip(foundShip)
    //         }
    //         if (id <= -110 && id >= -119 && gamePhase === 0) { setPlayerOneActiveShip(findShipById(1, 12)) }
    //         if (id <= -120 && id >= -129 && gamePhase === 0) { setPlayerOneActiveShip(findShipById(1, 13)) }
    //         if (id <= -200 && id >= -209 && gamePhase === 0) { setPlayerTwoActiveShip(findShipById(2, 21)) }
    //         if (id <= -210 && id >= -219 && gamePhase === 0) { setPlayerTwoActiveShip(findShipById(2, 22)) }
    //         if (id <= -220 && id >= -229 && gamePhase === 0) { setPlayerTwoActiveShip(findShipById(2, 23)) }
    //         if (playerOneActiveShip) {
    //             if (playerOneActiveShip.horizontal) {
    //                 placeShipOnHorizontalPlayerOne(id, 4, playerOneActiveShip.length.length)
    //             } else {
    //                 placeShipOnVerticalPlayerOne(id, 4, playerOneActiveShip.length.length)
    //             }
    //         }
    //         if (playerTwoActiveShip) {
    //             if (playerTwoActiveShip.horizontal) {
    //                 placeShipOnHorizontalPlayerTwo(id, 4, playerTwoActiveShip.length.length)
    //             } else {
    //                 placeShipOnVerticalPlayerTwo(id, 4, playerTwoActiveShip.length.length)
    //             }
    //         }
    //     } else {
    //         if (gamePhase === 1 && id >= 200 && id < 299) {
    //             //player one turn
    //             takeShotAtPlayerTwo(id)
    //             setGamePhase(2)
    //         }
    //         if (gamePhase === 2 && id >= 100 && id <= 199) {
    //             //player two turn
    //             console.log('shot fired from player one to player two')
    //             takeShotAtPlayerOne(id)
    //             setGamePhase(1)
    //         }
    //     }
    // }
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
                            playerOneCells={playerOneCells}
                            playerTwoCells={playerTwoCells}
                            playerOneDeployedShips={playerOneDeployedShips}
                            playerOneUndeployedShips={playerOneUndeployedShips}
                        />}
                    />
                    {/* <Route
                        path='/battleships/player_two'
                        element={<PlayerTwo
                            playerOneCells={playerOneCells}
                            playerTwoCells={playerTwoCells}
                            playerTwoDeployedShips={playerTwoDeployedShips}
                            playerTwoUndeployedShips={playerTwoUndeployedShips}
                        />}
                    /> */}
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