import React from "react";

const handleReadyButton = (evt) => setReadyState(evt.target.checked ? ev.target.checked : false);


const ReadyButton = () => {
    return (
        <button type="button" onClick={handleReadyButton}>Ready!</button>
    )
}

export default ReadyButton;