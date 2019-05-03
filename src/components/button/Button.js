import React from 'react';
import './Button.css'

class Button extends React.Component {
    render() {
        return (
            <div className="button-container">
                <button className="button">
                    Button
                </button>
            </div>
        );
    }
}

export default Button;
