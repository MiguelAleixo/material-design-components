import React from 'react';
import './Card.css'

class Card extends React.Component {
    render() {
        return (
            <div className="card" style={{ width: this.props.size}}>
                {this.props.children}
            </div>
        );
    }
}

export default Card;
