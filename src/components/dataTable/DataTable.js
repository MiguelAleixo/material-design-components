import React from 'react';
import './DataTable.css'

class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pessoas: {
                dados: ['Nome', 'Idade', 'Peso'],
                itens: [
                    {
                        nome: 'Miguel',
                        idade: 48,
                        peso: 43.5
                    },
                    {
                        nome: 'Joana',
                        idade: 41,
                        peso: 80
                    },
                    {
                        nome: 'Cleitim',
                        idade: 20,
                        peso: 79.5
                    }
                ]
            }
        }
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    {
                        this.state.pessoas.dados.map((item, i) => (
                            <th key={i}> {item} </th>
                        ))
                    }
                </tr>
                {
                    this.state.pessoas.itens.map((item, i) => (
                        <tr key={i}>
                            <td>{item.nome}</td>
                            <td>{item.idade}</td>
                            <td>{item.peso}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        );
    }
}

export default DataTable;
