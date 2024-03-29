import React from 'react'

const Box = (props) => {
  const bvar = props.theme
  return <div style={bvar}>{props.children}</div>
}

export default Box
