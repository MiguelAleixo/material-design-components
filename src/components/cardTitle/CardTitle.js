import React from 'react';
import './CardTitle.css'

class CardTitle extends React.Component {
    render() {
        return (
            <div className="titleContainer">
            <i className="material-icons icon">arrow_back</i>
                <div className="title"> {this.props.title} </div>
                {this.props.icon && (
                   <i className="material-icons icon-right">{ this.props.icon }</i>
                )}
            </div>
        );
    }
}

export default CardTitle;
