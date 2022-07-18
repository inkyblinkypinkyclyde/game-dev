import React from "react";
import styled from "styled-components";

const Cell = styled.div`
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


const Ships = ({ playerShips, selectActiveShip }) => {


    const availableShips = playerShips.map((ship) => {
        const handleClick = () => {
            selectActiveShip(ship)
        }
        const thisShip = ship.length.map((cell) => {
            return (
                <Cell
                    key={cell._cellId}
                    onClick={handleClick} />
            )
        })
        return (
            <>
                {ship.name}
                <ShipDiv
                    key={ship._shipId}>
                    {thisShip}
                </ShipDiv>
            </>
        )
    })
    return (
        <>
            {availableShips}
        </>
    )
}

export default Ships