import React from 'react'
import { aR } from '../../utils/util'
import style from '../../index.css'

const Box = (props) => {
  const mStyle = aR(props)
  return <div style={mStyle} className={style.box}>{props.children}</div>
}

export default Box
