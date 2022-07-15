import React, { useState } from "react";
import BattleshipGrid from "./BattleshipGrid";

const Battleships = () => {

    const [cells, setCells] = useState(
        [
            {
                number: 1,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 2,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 3,
                shotAt: false,
                shipPresent: false,
            },
            {
                number: 4,
                shotAt: false,
                shipPresent: false,
            }
        ]
    )

    return (
        <>
            <h1>Battleships</h1>
            <BattleshipGrid cells={cells} />
        </>
    )
}

export default Battleships