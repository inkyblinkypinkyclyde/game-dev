import React from "react";
import styled from 'styled-components'

const Cell = styled.div`
margin: 2px;
border: 1px black;
width: 40px;
height: 40px;
`
const ColoredDiv = styled.div`
width: 100%;
height: 100%;
background-color: ${({
    playerGrid,
    shotAt,
    shipPresent
}) => {
        if (playerGrid === true) {
            if (shipPresent === true) {
                return 'black'
            } else {
                return 'grey'
            }
        } else {
            if (shotAt === true) {
                if (shipPresent === true) {
                    return 'red'
                } else {
                    return 'blue'
                }
            } else {
                return 'grey'
            }
        }
    }};
`

const BattleshipCell = ({
    playerGrid,
    cell,
    shotAt,
    shipPresent,
    onCellClickAttack,
    onCellClickPlace
}) => {

    const handleClick = () => {
        // console.log(playerGrid)
        if (playerGrid === false) {
            onCellClickAttack(cell)
        } else {
            onCellClickPlace(cell)
        }
    }
    return (
        <Cell onClick={handleClick}>
            <ColoredDiv playerGrid={playerGrid} shotAt={shotAt} shipPresent={shipPresent} />
        </Cell>
    )
}

export default BattleshipCell