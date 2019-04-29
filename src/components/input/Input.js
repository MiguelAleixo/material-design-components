import React from 'react';
import './Input.css'

function Input() {
    return (
        <div className="inputContainer">
           <input className="input" required id="input" type="text"/>
           <label className="labelInput" for="input">Input</label>
        </div>
    );
}
export default Input;
