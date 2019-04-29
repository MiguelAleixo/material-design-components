import React from 'react';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';
import CardTitle from "../../components/cardTitle/CardTitle";

function Home() {
    return (
        <div>
            <Card>
                <CardTitle/>
                <div style={{display: 'flex'}}>
                    <Input/>
                    <Input/>
                </div>
            </Card>
        </div>
    );
}

export default Home;
