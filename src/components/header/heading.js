import React from 'react'
import { resolveSch } from '../../utils/util'
import style from '../../index.css'

const Heading = (props) => {
  const {as} = props
  const mStyle = resolveSch(props)
  const child = resolveAs(as, mStyle, props)
  return child
}


const resolveAs = (as, mStyle, props) => {
  if(as === 'h1') return <h1 className={style.logo} style={mStyle}>{props.children}</h1>
  if(as === 'h2') return <h2 className={style.logo} style={mStyle}>{props.children}</h2>
  if(as === 'h3') return <h3 className={style.logo} style={mStyle}>{props.children}</h3>
  if(as === 'h4') return <h4 className={style.logo} style={mStyle}>{props.children}</h4>
  if(as === 'h5') return <h5 className={style.logo} style={mStyle}>{props.children}</h5>
  if(as === 'h6') return <h6 className={style.logo} style={mStyle}>{props.children}</h6>
  else if(as === undefined || as === '') return <h1 className={style.logo} style={mStyle}>{props.children}</h1>
}


export default Heading
