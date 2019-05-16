import React from 'react';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';
import CardContent from '../../components/cardContent/CardContent';
import CardTitle from "../../components/cardTitle/CardTitle";
import Button from '../../components/button/Button';
import FloatButton from '../../components/floatButton/FloatButton';
import { Link } from 'react-router-dom';
import DataTable from "../../components/dataTable/DataTable";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pessoas: [
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
            ],
            titlePessoas: ['Nome do fiadaputa', 'Idade', 'Peso']
        }
    }
    render() {
        return (
            <div>
                <Card size={'600px'}>
                    <CardTitle title={'Pesquisar'} icon={'search'} />
                    <DataTable data={this.state.pessoas} titles={this.state.titlePessoas} />
                </Card>
                <FloatButton cardSize={'600px'} />
                <Link to="/nova">ir para nova</Link>
            </div>
        );
    }
}

export default Home;
