import React from 'react';
import './Flex.css'

class Flex extends React.Component {
    render() {
        return (
            <div className="flex-container">
              {this.props.children}
            </div>
        );
    }
}

export default Flex;
