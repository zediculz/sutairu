import React from "react"
import { resolveSch } from "../../utils/util"
import style from '../../index.css'

const Alert = (props) => {
   
    const alerticonchild = props.children[0]
    const alertheadchild = props.children[1]
    const alertbodychild = props.children[2]

    const {type} = props
    let variant = getVariant(alertVariant, type)
   
    const mStyle = resolveSch(props)

    return (
        <aside style={mStyle} className={style.alertwrap}>
            <div className={style.alerthead}>
                {alerticonchild}
            </div>
            <div className={style.alertbody}>
                {alertheadchild}
                {alertbodychild}
            </div>
        </aside>
    )
}

export const AlertIcon = (props) => {
    const {src} = props
    const p = src === undefined || src === '' ? '#' : src
    return (
        <p>{p}</p>
    )
}

export const AlertHead = (props) => {
    const {children} = props
    return (
        <h4>{children}</h4>
    )
}

export const AlertBody = (props) => {
    const {children} = props
    return (
        <p>{children}</p>
    )
}

const alertVariant = [
    {name: 'normal', color: 'initial'},
    {name: 'success', color: 'green'},
    {name: 'delete', color: 'red'},
    {name: 'warning', color: 'goldenrod'}
]

const getVariant = (type) => {
    let selected = alertVariant.filter(va => {
        if (va.name === type) return va 
    })

    if(selected.length === 0) {
        return variant[0]
    }

    return selected[0]
}


export default Alert