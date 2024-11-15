import React from 'react';

function FunctionClick(props) {
    function printMessage()
    {
        console.log("button clicked");
    }
    return (
        <div>
            <button onClick={printMessage}>Click  Here</button>
        </div>
    );
}

export default FunctionClick;