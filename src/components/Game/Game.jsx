import React from "react";
import style from './Game.module.css'
import {Col, Container, Row} from "react-bootstrap";

class Game extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <div className={style.header}>
                                    <h1>Привет, давай поиграем</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className={style.game}>
                                    <p>Сделай свой выбор</p>
                                    <div className={style.buttonForGame}>
                                        <button id="камень" onClick={this.props.handleClick}>Камень</button>
                                        <button id="ножницы" onClick={this.props.handleClick}>Ножницы</button>
                                        <button id="бумага" onClick={this.props.handleClick}>Бумага</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs lg="6">
                                <div className={style.choise}>
                                    <h3>Игрок выбрал</h3>
                                    <p>{this.props.playerValue}</p>
                                </div>
                            </Col>
                            <Col xs lg="6">
                                <div  className={style.choise}>
                                    <h3>Скайнет выбрал <br/> </h3>
                                    <p>{this.props.compValue}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className={style.winner}>
                                    <h1>{this.props.winner}</h1>
                                </div>
                            </Col>
                        </Row>
                        <div className={style.mainGame}>



                            <div className={style.resultGame}>
                                <div >
                                    <h3 className={style.floatLeft}>Игрок выбрал <br/> {this.props.playerValue}</h3>

                                    <p className={style.floatRight}>Скайнет выбрал <br/> {this.props.compValue}</p>
                                </div>


                                <div className={style.points}>
                                    <div className={style.column}><span>{this.props.playerPoints}</span></div>
                                    <div className={style.column}><span>{this.props.compPoints}</span></div>
                                    <div className={style.column}><span>{this.props.draw}</span></div>
                                </div>

                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Game;