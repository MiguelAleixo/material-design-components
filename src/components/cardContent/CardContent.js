import React from 'react';
import './CardContent.css'

class CardContent extends React.Component {
    render() {
        return (
            <div className="card-content">
              {this.props.children}
            </div>
        );
    }
}

export default CardContent;
