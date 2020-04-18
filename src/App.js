import React from 'react';
import './App.css';
import Game from "./components/Game/Game";
import PlayerValue from "./components/Game/PlayerValue/PlayerValue";
import CompValue from "./components/Game/CompValue/CompValue";
import {Col, Container, Row} from "react-bootstrap";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            game: [
                {player: ''},
                {comp: ''}
            ],
            winner: " ",
            playerValue: "",
            compValue: "",
            playerPoints: 0,
            compPoints: 0,
            draw: 0,
        };
    }


    handleClick = (e) => {
        e.preventDefault();
        let playerValue = e.currentTarget.id;
        let compValue = this.getCompChoise();
        let winner = this.game(playerValue, compValue);
        let forStatePlayer = {player: playerValue};
        let forStateComp = {comp: compValue};
        let newItem = [...this.state.game, forStatePlayer, forStateComp];
        this.whoWinner(winner);
        this.setState(
            {
                game: newItem,
                winner,
                playerValue,
                compValue,
            });
    };

    whoWinner = (winner) => {
        if ( winner === "Ты выиграл!") {
            this.setState((prevState) => ({playerPoints: prevState.playerPoints + 1}));
        } else if (winner === "Скайнет выиграл" ) {
            this.setState((prevState) => ({compPoints: prevState.compPoints + 1}));
        } else {
            this.setState((prevState) => ({draw: prevState.draw + 1}));
        }
    };

    getCompChoise = () => {
        let comMove = Math.random();
        if (comMove <= 0.33) {
            return "камень";
        } else if (comMove <= 0.61) {
            return "бумага";
        } else {
            return "ножницы";
        }
    };

    game = (a, b) => {
        if (a === b) {
            return ("Победила дружба!");
        } else if (a === "камень") {
            if (b === "ножницы") {
                return ("Ты выиграл!");
            } else {
                return ("Скайнет выиграл");
            }
        } else if (a === "бумага") {
            if (b === "камень") {
                return ("Ты выиграл!");
            } else {
                return ("Скайнет выиграл");
            }
        } else if (a === "ножницы") {
            if (b === "бумага") {
                return ("Ты выиграл!");
            } else {
                return ("Скайнет выиграл");
            }
        }
    };

    render() {
        return (
            <div className="App">
                <Container fluid>
                    <Row>
                        <Col xs lg="2">
                            <PlayerValue value={this.state.game} />
                        </Col>
                        <Col xs lg="8">
                            <Game
                                handleClick={this.handleClick}
                                winner={this.state.winner}
                                playerValue={this.state.playerValue}
                                compValue={this.state.compValue}
                                playerPoints={this.state.playerPoints}
                                compPoints={this.state.compPoints}
                                draw={this.state.draw}
                            />
                        </Col>
                        <Col xs lg="2">
                            <CompValue  value={this.state.game}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
