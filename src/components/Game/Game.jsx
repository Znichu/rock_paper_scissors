import React from "react";
import style from './Game.module.css'

class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            comp: ''
        };
    }

    handleSelectChange = (event) => {
        this.setState({
            result: event.target.value
        })
    };

    render() {

        let comMove = Math.random();
        if (comMove <= 0.20) {
            comMove = "rock";
        } else if (comMove <= 0.40) {
            comMove = "paper";
        } else {
            comMove = "scissors";
        }


        let game = (choice1, choice2) => {
            if (choice1 === choice2) {
                alert("The result is a tie!");
            } else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    alert("rock wins");
                } else {
                    alert("paper wins");
                }
            } else if (choice1 === "paper") {
                if (choice2 === "rock") {
                    alert("paper wins");
                } else {
                    alert("scissors wins");
                }
            } else if (choice1 === "scissors") {
                if (choice2 === "paper") {
                    alert("scissors wins");
                } else {
                    alert("rock wins");
                }
            }
        };

        let handlerChange = () => {
            let userMove = this.state.result;
            game (userMove, comMove);
            console.log(userMove, comMove);
        };

        return (
            <div className={style.mainGame}>
                <h1>Привет</h1>
                <div className="custom-select">
                    <select onClick={this.handleSelectChange}>
                        <option>Не выбрано</option>
                        <option value="rock">Камень</option>
                        <option value="scissors">Ножницы</option>
                        <option value="paper">Бумага</option>
                    </select>
                </div>

                <button onClick={handlerChange}>
                   Кнопка
                </button>
                <div>
                    {this.state.result}
                    {this.state.comp}
                </div>


            </div>
        );
    }

}

export default Game;