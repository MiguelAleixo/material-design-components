import React from 'react';
import './Input.css'

class Input extends React.Component {
    render() {
        return (
            <div className="inputContainer" style={ this.props.margin ? { marginLeft: '16px' } : {}}>
                <input className="input" required type="text"/>
                <label className="labelInput" htmlFor="input">{ this.props.label }</label>
            </div>
        );
    }
}

export default Input;
