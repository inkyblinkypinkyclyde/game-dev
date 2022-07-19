import React from "react";
import Cell from "./Cell";
import styled from "styled-components";

const DivCell = styled.div`
background-color: black;
margin: 2px;
border: 1px black;
width: 40px;
height: 40px;
`
const ShipDiv = styled.div`
display: grid;
grid-template-columns:42px 42px 42px 42px 42px;
`
const PlayerShips = ({ playerOneShips, playerTwoShips, playerShips, clickHandler }) => {

    const displayPlayerOneShips = playerOneShips.map((ship) => {
        const thisShip = ship.length.map((cell) => {
            return (
                <Cell
                    key={cell._cellId}
                    cell={cell}
                    clickHandler={clickHandler}
                />
            )
        })
        return (
            <div
                key={ship._shipId}
            >
                {ship.name}
                <ShipDiv
                >
                    {thisShip}
                </ShipDiv>
            </div>
        )
    })
    const displayPlayerTwoShips = playerTwoShips.map((ship) => {
        const thisShip = ship.length.map((cell) => {
            return (
                <Cell
                    key={cell._cellId}
                    cell={cell}
                    clickHandler={clickHandler}
                />
            )
        })
        return (
            <div
                key={ship._shipId}
            >
                {ship.name}
                <ShipDiv

                >
                    {thisShip}
                </ShipDiv>
            </div>
        )
    })

    return (
        <>
            {playerShips ? displayPlayerOneShips : displayPlayerTwoShips}
        </>
    )
}

export default PlayerShips