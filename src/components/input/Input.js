import React from 'react';
import './Input.css'

class Input extends React.Component {
    render() {
        return (
            <div className="inputContainer">
                <input className="input" required type="text"/>
                <label className="labelInput">Input</label>
            </div>
        );
    }
}

export default Input;
