import React from "react";
import style from './CompValue.module.css'


class CompValue extends React.Component {
    render() {
        let itemList = this.props.value.map(c => <li>{c.comp}</li>);
        return (
            <div className={style.compValue}>
                <span>СКАЙНЕТ</span>
                <ul>
                    {itemList}
                </ul>
            </div>
        );
    }

}

export default CompValue;