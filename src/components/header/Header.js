import React from 'react'
import { aR } from '../../utils/util'

function Header(props) {
 
  const mStyle = aR(props)

  return <header style={mStyle}>{props.children}
  </header>
}

export default Header
