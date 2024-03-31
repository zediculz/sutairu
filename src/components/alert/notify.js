import React, {useState} from "react"
import { getTheme } from "../../utils/utils"

import style from '../../index.css'

const Notify = (props) => {
    const {state} = props
    const [open, setOpen] = useState(true)
    const notifyheadchild = props.children[0]
    const notifybodychild = props.children[1]

    const {type} = props
    let variant = getVariant(notifyVariant, type)

    const {name} = props
    const theme = getTheme()
    const s = {borderColor: variant.color, color: variant.color, backgroundColor: variant.bg, ...theme[name]}

    const {close} = props

    let sl = manageStyle(state, style)
    
    const handleClose = (open) => {
        if(state === 'open') {
            setOpen(false)
            close('close')
        }
    }

    return (
        <aside style={s} className={sl}>
            <div className={style.notifybody}>
                {notifyheadchild}
                {notifybodychild}
            </div>
            <div className={style.notifyhead}>
                <p onClick={() => handleClose(open)}>close</p>
            </div>
        </aside>
    )
}


export const NotifyHead = (props) => {
    const {children} = props
    return (
        <h4>{children}</h4>
    )
}

export const NotifyBody = (props) => {
    const {children} = props
    return (
        <p>{children}</p>
    )
}

const notifyVariant = [
    {name: 'default', color: '#222', bg: '#fff'},
    {name: 'success', color: '#222', bg: 'green'},
    {name: 'delete', color: '#222', bg: 'red'},
    {name: 'warning', color: '#222', bg: 'goldenrod'}
]

const getVariant = (variant, type) => {
    let selected = variant.filter(va => {
        if (va.name === type) return va 
    })

    if(selected.length === 0) {
        return variant[0]
    }

    return selected[0]
}

const manageStyle = (state, style) => {
    if(state === 'close') return style.removeDom
    if(state === 'open') return style.notifywrap
}

export default Notify