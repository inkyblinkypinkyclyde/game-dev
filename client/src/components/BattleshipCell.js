import React from "react";
import styled from 'styled-components'

const Cell = styled.div`
background-color: grey;
margin: 2px;
border: 1px black;
width: 40px;
height: 40px;
`

const RedDiv = styled.div`
background-color: red;
`
const GreyDiv = styled.div`
background-color: grey;
`
const BlueDiv = styled.div`
background-color: blue;
`

const BattleshipCell = ({ cell, shotAt, shipPresent, onCellClick }) => {
    const cellStatusRender = (shotAt, shipPresent) => {
        if (shotAt === true) {
            if (shipPresent === true) {
                return <h3>H</h3>
            } else {
                return <h3>M</h3>
            }
        } else {
            return <h3>E</h3>
        }
    }

    const handleClick = () => {
        console.log('now')
        onCellClick(cell)
    }
    return (
        <Cell onClick={handleClick}>

            {
                cellStatusRender(shotAt, shipPresent)
            }
        </Cell>
    )
}

export default BattleshipCell