import React from 'react'
import { resolveSch } from '../../utils/util'

function Header(props) {
  const mStyle = resolveSch(props)

  return <header style={mStyle}>{props.children}
  </header>
}

export default Header
