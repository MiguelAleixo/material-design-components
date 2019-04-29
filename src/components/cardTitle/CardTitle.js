import React from 'react';
import './CardTitle.css'

class CardTitle extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1 className="title"> Título </h1>
            </div>
        );
    }
}

export default CardTitle;
