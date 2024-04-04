import React from 'react'
import { resolveSch } from '../../utils/util'
import style from '../../index.css'


const Block = (props) => {
  const mStyle = resolveSch(props)
  return <section style={mStyle} className={style.block}>{props.children}</section>
}

export default Block
