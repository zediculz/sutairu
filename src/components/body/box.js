import React from 'react'
import { resolveSch } from '../../utils/util'
import style from '../../index.css'

const Box = (props) => {
  const mainStyle = resolveSch(props)

  return <div style={mainStyle} className={style.box}>{props.children}</div>
}

export default Box
