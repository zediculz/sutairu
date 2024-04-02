import React from 'react'
import style from '../../index.css'
import { getTheme, getNTheme } from '../../utils/utils'

const VStack = (props) => {
  const {name, mquery} = props
  const theme = getTheme()
  const ntheme = getNTheme()
  const childs = props.children
  let rStyle = aliasResolver(props)
  const mStyle = {...theme, ...ntheme[name], ...rStyle}
  
  return (
    <div style={mStyle} className={style.firstStack}>
      {childs}
    </div>
  )
}

export const aliasResolver = (props) => {
  let style = {
    width: props.w === undefined ? 'initial' : props.w,
    height: props.h === undefined ? 'initial' : props.h,
    alignItems: props.align === undefined ? 'initial' : props.align,
    justifyContent: props.justify === undefined ? 'initial' : props.justify,
    backgroundColor: props.bg === undefined ? 'initial' : props.bg,
    color: props.fg === undefined ? 'initial' : props.fg,
    flex: props.flex === undefined || props.flex === '' ? 'initial' : props.flex
  }

  return style

}

export default VStack
