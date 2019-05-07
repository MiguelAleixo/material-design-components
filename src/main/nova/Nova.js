import React from 'react';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';
import CardContent from '../../components/cardContent/CardContent';
import CardTitle from "../../components/cardTitle/CardTitle";
import FloatButton from '../../components/floatButton/FloatButton';
import { Link } from 'react-router-dom'

function Nova() {
    return (
        <div>
            <Card size={'600px'}>
                <CardTitle title={'Nova tela'} icon={'search'} />
                <CardContent>
                    <Input />
                    <Input />
                    <Link to="/">Home</Link>
                    <div>
                        <Input />
                        <Input />
                    </div>
                    <Link to="/nova">ir para nova</Link>
                </CardContent>
            </Card>
            <FloatButton cardSize={'600px'} />
        </div>
    );
}

export default Nova;
