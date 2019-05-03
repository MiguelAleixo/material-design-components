import React from 'react';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';
import CardContent from '../../components/cardContent/CardContent';
import CardTitle from "../../components/cardTitle/CardTitle";
import Button from '../../components/button/Button';

function Home() {
    return (
        <div>
            <Card>
                <CardTitle title={'Pesquisar'} icon={'search'}/>
                <CardContent>
                    <Button/>
                </CardContent>
            </Card>
        </div>
    );
}

export default Home;
