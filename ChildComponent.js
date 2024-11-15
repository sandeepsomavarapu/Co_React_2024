import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>GreetParent</button> */}
            <button onClick={()=>props.greetHandler1('child')}>GreetParentWithData</button>
        </div>
    );
}

export default ChildComponent;