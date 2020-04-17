import React from "react";
import style from './Game.module.css'

class Game extends React.Component {

    render() {
        return (
            <div className={style.mainGame}>
                <div className={style.header}>
                    <h1>Привет, давай поиграем</h1>
                </div>

                <div className={style.game}>
                    <p>Сделай свой выбор</p>
                    <div className={style.buttonForGame}>
                        <button id="камень" onClick={this.props.handleClick}>Камень</button>
                        <button id="ножницы" onClick={this.props.handleClick}>Ножницы</button>
                        <button id="бумага" onClick={this.props.handleClick}>Бумага</button>
                    </div>
                </div>
                <div className={style.resultGame}>
                    <div className={style.choise}>
                        <p className={style.floatLeft}>Игрок выбрал <br/> {this.props.playerValue}</p>

                        <p className={style.floatRight}>Скайнет выбрал <br/> {this.props.compValue}</p>
                    </div>

                    <div className={style.winner}>
                        <h2>{this.props.winner}</h2>
                    </div>

                </div>

            </div>
        );
    }
}

export default Game;