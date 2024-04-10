import React from 'react'

function Header(props) {
  const mStyle = {}

  return <header style={mStyle}>{props.children}
  </header>
}

export default Header
