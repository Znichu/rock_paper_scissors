import React from "react";
import style from './PlayerValue.module.css'


class PlayerValue extends React.Component {
    render() {
        let itemList = this.props.value.map(p => <li>{p.player}</li>);
        return (
            <div className={style.playerValue}>
                <span>ИГРОК</span>
                <ul>
                    {itemList}
                </ul>
            </div>
        );
    }

}

export default PlayerValue;