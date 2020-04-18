import React from "react";
import style from './PlayerValue.module.css'


class PlayerValue extends React.Component {
    render() {
        let itemList = this.props.value.map((p, index) => <li key={index}>{p.player}</li>);
        return (
            <div className={style.playerValue}>
                <h5>ИГРОК</h5>
                <ul>
                    {itemList}
                </ul>
            </div>
        );
    }

}

export default PlayerValue;