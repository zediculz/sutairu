import React from "react";
import {resolveSch} from '../../utils/util'
import style from '../../index.css'

const Icon = (props) => {
    const {src} = props
    return (
        <span className={style.icon}>{src}</span>
    )
}


export default Icon