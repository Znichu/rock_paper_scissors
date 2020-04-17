import React from 'react';
import './App.css';
import Game from "./components/Game/Game";
import PlayerValue from "./components/Game/PlayerValue/PlayerValue";
import CompValue from "./components/Game/CompValue/CompValue";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            game: [
                {player: ''},
                {comp: ''}
            ],
            winner: "",
            playerValue: "",
            compValue: ""
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
        this.setState(
            {
                game: newItem,
                winner,
                playerValue,
                compValue
            });
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
                <header className="App-header">
                    <PlayerValue value={this.state.game} />
                    <Game
                        handleClick={this.handleClick}
                        winner={this.state.winner}
                        playerValue={this.state.playerValue}
                        compValue={this.state.compValue}
                    />
                    <CompValue  value={this.state.game}/>

                </header>
            </div>
        );
    }
}

export default App;
