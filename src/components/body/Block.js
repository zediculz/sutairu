import React from 'react'
import { getTheme } from '../../utils/utils'

const Block = (props) => {
  const {name} = props
  const theme = getTheme()
  return <aside style={theme[name]}>{props.children}</aside>
}

export const Box = (props) => {
  const theme = getTheme()
  const {name} = props
  return <div style={theme[name]}>{props.children}</div>
}

export default Block
