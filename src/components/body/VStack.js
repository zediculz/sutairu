import React from 'react'
import { resolveSch } from '../../utils/util'
import style from '../../index.css'

const Stack = (props) => {
 
  const childs = props.children
  const mStyle = resolveSch(props)
  
  return (
    <div style={mStyle} className={style.stack}>
      {childs}
    </div>
  )
}

export default Stack
