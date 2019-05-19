import React from 'react';
import './Select.css'

class Select extends React.Component {
    render() {
        return (
            <select id="appearance-select">
                <option>Selecione</option>
                <option>Primeira opção</option>
                <option>Segunda opção</option>
                <option>Terceira opção</option>
                <option>Quarta opção</option>
            </select>
        );
    }
}

export default Select;
