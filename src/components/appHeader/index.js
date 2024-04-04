import React from "react"
import style from '../../index.css'


const AppBar = (props) => {
    return (
        <header className={style.appbar}>
            <div className={style.appbarback}>
                <span>Back</span>
            </div>
            <div className={style.appbartitle}>
                <h2>titlle</h2>
            </div>
        </header>
    )
}

export const AppBarBack = () => {
    return (
        <div className={style.appbarback}>
            <span>Back</span>
        </div>
    )
}

export const AppBarTitle = () => {
    return (
         <div className={style.appbartitle}>
            <h2>titlle</h2>
        </div>
    )
}

export default AppBar