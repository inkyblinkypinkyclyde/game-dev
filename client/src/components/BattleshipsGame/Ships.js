import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const ShipDiv = styled.div`
display: grid;
grid-template-columns:42px 42px 42px 42px 42px 42px 42px 42px 42px;
`

const ShipsDiv = styled.div`
display: grid;
`

const Ships = ({ undeployedShips, deployedShips }) => {
    console.log(undeployedShips)
    console.log(deployedShips)
    const displayUndeployedShips = undeployedShips.map((ship, index) => {
        const thisShip = ship.length.map((cell) => {
            // console.log(cell)
            return (
                <Cell
                    cell={cell}
                    key={cell._cellId}
                    shotAt={cell.shotAt}
                    location={cell.location}
                />
            )
        })
        return (
            <div
                key={ship._shipId}
            >
                {ship.name}
                <ShipDiv>
                    {thisShip}
                </ShipDiv>
            </div>
        )
    })

    return (
        <ShipsDiv>
            {displayUndeployedShips}
            {/* {deployedShips} */}
        </ShipsDiv>
    )
}

export default Ships