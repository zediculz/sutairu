import React from 'react'
import { aR } from '../../utils/util'

const Text = (props) => {
  let mStyle = aR(props)
  return <p style={mStyle}>{props.children}</p>
}

export default Text
