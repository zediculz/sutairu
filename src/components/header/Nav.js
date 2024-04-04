import React, { Fragment } from 'react'
import { resolveSch } from '../../utils/util'

function Nav(props) {
  const mStyle = resolveSch(props)
  return <nav style={mStyle}>{props.children}</nav>
}

export default Nav
