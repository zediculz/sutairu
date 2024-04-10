import React, { Fragment } from 'react'

function Nav(props) {
  const mStyle = {}
  return <nav style={mStyle}>{props.children}</nav>
}

export default Nav
