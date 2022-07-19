import React from "react";
import styled from "styled-components";

const DisplayCell = styled.div`
margin: 2px;
border: 1px black;
width: 40px;
height: 40px;
/* background-color: pink; */
`

const ColoredDiv = styled.div`
width: 100%;
height: 100%;
background-color: ${({
    cell,
    playerGrid
}) => {
        if (cell._cellId < 0) {
            if (!cell.location) {
                return 'grey'
            } else {
                return 'white'
            }
        } else {
            if (cell.value === '_') { return 'grey' }
            if (cell.value === 's' && !playerGrid) { return 'grey' }
            if (cell.value === 's' && playerGrid) { return 'black' }
            if (cell.value === 'h') { return 'red' }
            if (cell.value === 'm') { return 'blue' }
            // if (cell.value === '') {}
            //     if (shipPresent === true) {
            //         return 'red'
            //     } else {
            //         return 'blue'
            //     }
            // } else {
            // return 'grey'
        }
    }};
`



const Cell = ({ cell, clickHandler, playerGrid }) => {
    console.log(`player grid bool is: ` + playerGrid)
    const handleClick = () => {
        // console.log(cell._cellId)
        console.log(cell)
        clickHandler(cell._cellId)
    }

    return (
        <DisplayCell onClick={handleClick}>
            <ColoredDiv cell={cell} playerGrid={playerGrid} />
        </DisplayCell>


    )
}

export default Cell