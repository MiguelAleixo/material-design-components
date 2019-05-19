import React from 'react';
import './FloatButton.css'

class FloatButton extends React.Component {
    render() {
        return (
            <div className="float-button-container" style={{  right: `calc(50% - (${this.props.cardSize} / 2) - 79px)`}}>
                <button className="float-button">
                <i className="material-icons icon"> { this.props.icon } </i>
                </button>
            </div>
        );
    }
}

export default FloatButton;
