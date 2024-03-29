import React from 'react'

const Block = (props) => {
  const { theme } = props
  return <aside style={theme}>{props.children}</aside>
}

export default Block
