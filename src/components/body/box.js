import React from 'react'
import { aR } from '../../utils/util'
import style from '../../index.css'

const Box = (props) => {
  const mainStyle = aR(props)

  return <div style={mainStyle} className={style.box}>{props.children}</div>
}

export default Box
