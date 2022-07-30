import React from "react";


const ReadyButton = ({handleReadyButton}) => {

    // const [playerReady, setPlayerReady] = useState (false)

    // const handleReadyButton = (evt) => setPlayerReady(true)
    return (
        <button type="button"
        onClick={handleReadyButton}
        // onClick={ReadyButton}
        >Ready!</button>
    )
}

export default ReadyButton;