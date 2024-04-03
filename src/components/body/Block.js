import React from 'react'
import { aR } from '../../utils/util'
import style from '../../index.css'


const Block = (props) => {
  const mStyle = aR(props)
  return <section style={mStyle} className={style.block}>{props.children}</section>
}

export default Block
