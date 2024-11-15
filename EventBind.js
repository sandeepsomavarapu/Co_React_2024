import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props)
    {
        
        super()
        this.state={
            message:"Hello"
        }
        this.changeState=this.changeState.bind(this);
    }
 changeState()    //with in function if use this it will be like new context in javascript so we need to bind 
{                  // there are different ways to bind 
    this.setState({
        message:"Event Binding Example"
    })
}

changeState1=()=>    
{                 
    this.setState({
        message:"Event Binding Example'binding with arrow function'"
    })
}
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.changeState.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.changeState()}>Click</button>*/}

                <button onClick={this.changeState}>Click</button>
                <button onClick={this.changeState1}>Click Once </button>
            </div>
        );
    }
}

export default EventBind;