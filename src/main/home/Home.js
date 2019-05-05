import React from 'react';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';
import CardContent from '../../components/cardContent/CardContent';
import CardTitle from "../../components/cardTitle/CardTitle";
import Button from '../../components/button/Button';
import FloatButton from '../../components/floatButton/FloatButton';

function Home() {
    return (
        <div>
            <Card size={'600px'}>
                <CardTitle title={'Pesquisar'} icon={'search'}/>
                <CardContent>
                    <div>
                        <Input/>
                        <Input/>
                    </div>
                    <Button title={'Continuar'}/>
                </CardContent>
            </Card>
            <FloatButton cardSize={'600px'}/>
        </div>
    );
}

export default Home;
