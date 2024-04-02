import React from 'react'
import { getTheme, getNTheme } from '../../utils/utils'

const Text = (props) => {
  const {name, mquery} = props
  const theme = getTheme()
  const ntheme = getNTheme()
  let rStyle = aliasResolver(props)
  const mStyle = {...theme, ...ntheme[name], ...rStyle}
  return <p style={mStyle}>{props.children}</p>
}

export const aliasResolver = (props) => {
  let style = {
    color: props.fg === undefined ? 'initial' : props.fg,
    fontSize: props.font === undefined || props.font === '' ? '16px' : props.font,
    backgroundColor: props.bg === undefined ? 'initial' : props.bg,
  }

  return style

}

export default Text
