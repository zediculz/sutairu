import React from 'react'
import { getTheme, aliasResolver, getNTheme } from '../../utils/utils'
import style from '../../index.css'

const Block = (props) => {
  let rStyle = aliasResolver(props)
  const {name} = props
  const theme = getTheme()
  const ntheme = getNTheme()
  const mStyle = {...theme, ...ntheme[name], ...rStyle}
  return <div style={mStyle} className={style.block}>{props.children}</div>
}


// flex by default 
// we need all flex contols 
// height and weight

//box a child component
export const Box = (props) => {
  let rStyle = aliasResolver(props)
  const {name} = props
  const theme = getTheme()
  const ntheme = getNTheme()
  const mStyle = {...theme, ...ntheme[name], ...rStyle}
  return (
    <div style={mStyle}>{props.children}</div>
  )
}

export default Block
