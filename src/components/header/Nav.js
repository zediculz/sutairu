import React, { Fragment } from 'react'
import { aR } from '../../utils/util'

function Nav(props) {
  const mStyle = aR(props)
  return <nav style={mStyle}>{props.children}</nav>
}

export default Nav
