import React from 'react';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';
import CardTitle from "../../components/cardTitle/CardTitle";
import Button from '../../components/button/Button';

function Home() {
    return (
        <div>
            <Card>
                <CardTitle title={'Cadastro'} icon={'info'}/>
                    <Input/>
                    <Button/>
            </Card>
        </div>
    );
}

export default Home;
