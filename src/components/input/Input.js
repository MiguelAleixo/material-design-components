import React from 'react';
import './Input.css'

class Input extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="inputContainer">
                <input className="input" required id="input" type="text"/>
                <label className="labelInput" for="input">Input</label>
            </div>
        );
    }
}

export default Input;
