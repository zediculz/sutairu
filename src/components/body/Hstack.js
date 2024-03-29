import React from 'react'
import style from '../../index.css'

const HStack = (props) => {
  const theme = props.theme
  const childs = props.children
  return (
    <div style={theme} className={style.hstack}>
      {childs}
    </div>
  )
}

export default HStack
