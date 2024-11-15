import React, { Component } from 'react';

class Destructring extends Component {
    render() {
        const {id,name,salary}=this.props
        return (
            <div>
                <h1>{id} {name} {salary}</h1>
            </div>
        );
    }
}

export default Destructring;