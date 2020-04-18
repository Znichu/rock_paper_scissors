import React from "react";
import style from './CompValue.module.css'


class CompValue extends React.Component {
    render() {
        let itemList = this.props.value.map((c, index) => <li key={index}>{c.comp}</li>);
        return (
            <div className={style.compValue}>
                <h5>СКАЙНЕТ</h5>
                <ul>
                    {itemList}
                </ul>
            </div>
        );
    }

}

export default CompValue;