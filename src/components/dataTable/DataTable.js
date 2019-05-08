import React from 'react';
import './DataTable.css'

class DataTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    {
                        this.props.titles.map((item, i) => (
                            <th key={i}> {item} </th>
                        ))
                    }
                </tr>
                {
                    this.props.data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.nome}</td>
                            <td>{item.idade}</td>
                            <td>{item.peso}</td>
                        </tr>
                    ))
                }
                </tbody>
                <tfoot>
                  <tr>
                      <td colSpan={this.props.titles.length}>
                          <div className="footer-container">
                              <span> 1-10 de 10 </span>
                              <i className="material-icons"> keyboard_arrow_left </i>
                              <i className="material-icons"> keyboard_arrow_right </i>
                          </div>
                      </td>
                  </tr>
                </tfoot>
            </table>
        );
    }
}

export default DataTable;
