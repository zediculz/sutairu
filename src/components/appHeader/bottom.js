
import React from "react"
import style from '../../index.css'

const BottomDrawer = (props) => {
    return (
        <aside className={style.bottomnav}>
            {props.children}
        </aside>
    )
}


export default BottomDrawer