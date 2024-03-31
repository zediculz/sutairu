import React from "react";
import style from '../../index.css'


const Button = (props) => {
    const {children, click} = props
    return (
        <button onClick={click} className={style.button}>{children}</button>
    )
}

export default Button