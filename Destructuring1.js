import React from 'react';

function Destructuring1({stuId,stuName,marks}) {
    return (
        <div>
            <h1>{stuId} {stuName} {marks}</h1>
        </div>
    );
}

export default Destructuring1;