import React from 'react';
import Card from '../../components/card/Card';
import CardTitle from "../../components/cardTitle/CardTitle";
import Button from '../../components/button/Button';
import Flex from '../../components/flex/Flex';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            burguers: [],
            burguersProps: {}
        }
    }



    render() {
        console.log(this.state)
        return (
            <div>
                <Card size={'600px'}>
                    <CardTitle title={'Pesquisar'} icon={'search'} />

                    <Flex>
                        {this.renderText('MC')}
                        {this.renderText('BK')}
                        {this.renderText('BOBS')}
                        {this.renderText('girafas')}
                    </Flex>

                    <button disabled={this.state.burguers.length !== 2} className="button" onClick={this.send} className="button"
                        style={{ backgroundColor: this.state.burguers.length !== 2 ? 'grey' : 'green' }}>
                        SEND
                    </button>

                </Card>
            </div>
        );
    }

    renderText(text) {
        return (
            <button className="button" disabled={this.state.burguersProps[text] && this.state.burguersProps[text].disabled}
                onClick={() => this.selectBurguer(text)} className="button" style={{ backgroundColor: this.setBackgroundColor(text) }}>
                {text}
            </button>
        )
    }

    send = () => {
        let burguersProps = {};

        this.state.burguers.map(text => {
            burguersProps = {
                ...burguersProps,
                [text]: {
                    disabled: true
                }
            }
        });

        this.setState({ burguersProps });
    }

    selectBurguer = (text) => {
        if (this.state.burguers.includes(text)) {
            const differents = this.state.burguers.filter((obj) => obj !== text);
            this.setState({
                burguers: differents,
                burguersProps: {
                    ...this.state.burguersProps,
                    [text]: {
                        selected: this.state.burguersProps[text] && this.state.burguersProps[text].selected ?
                            !this.state.burguersProps[text].selected : true
                    }
                }
            })

        } else {
            this.setState({
                burguers: [...this.state.burguers, text],
                burguersProps: {
                    ...this.state.burguersProps,
                    [text]: {
                        selected: this.state.burguersProps[text] && this.state.burguersProps[text].selected ?
                            !this.state.burguersProps[text].selected : true
                    }
                }
            })
        }
    }

    setBackgroundColor = (text) => {
        if (this.state.burguersProps[text]) {
            if (this.state.burguersProps[text].selected) {
                return 'black';
            }
            if(this.state.burguersProps[text].disabled) {
                return 'grey';
            }
            return 'blue';
        }
        return 'blue';
    }

}

export default Home;
