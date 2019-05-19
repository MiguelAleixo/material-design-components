import React from 'react';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';
import CardContent from '../../components/cardContent/CardContent';
import CardTitle from "../../components/cardTitle/CardTitle";
import FloatButton from '../../components/floatButton/FloatButton';
import Flex from '../../components/flex/Flex';
import { Link } from 'react-router-dom'

function Nova() {
    return (
        <div>
            <Card size={'600px'}>
                <CardTitle title={'Cadastro de pessoa'} icon={'search'} />
                <CardContent>
                    <Input label={'Nome'} />
                    <Flex>
                        <Input label={'Sexo'} />
                        <Input label={'Data de nascimento'} margin />
                    </Flex>
                    <Flex>
                        <Input label={'Telefone'} />
                        <Input label={'E-mail'} margin />
                    </Flex>
                    <Flex>
                        <Input label={'RG'} />
                        <Input label={'CPF'} margin />
                    </Flex>
                    <Flex>
                        <Input label={'Estado'} />
                        <Input label={'Cidade'} margin />
                    </Flex>
                    <Flex>
                        <Input label={'Bairro'} />
                        <Input label={'Logradouro'} margin />
                        <Input label={'Número'} margin />
                    </Flex>
                    <Input label={'Complemento'} />
                </CardContent>
            </Card>
            <FloatButton icon={'done'} cardSize={'600px'} />
        </div>
    );
}

export default Nova;
