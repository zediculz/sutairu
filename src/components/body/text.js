import React from 'react'
import { resolveSch } from '../../utils/util'

const Text = (props) => {
  let mStyle = resolveSch(props)
  return <p style={mStyle}>{props.children}</p>
}

export default Text
