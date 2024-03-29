import React from 'react'
import style from '../../index.css'

const VStack = (props) => {
  const theme = props.theme
  const childs = props.children
  return (
    <div style={theme} className={style.vstack}>
      {childs}
    </div>
  )
}

export default VStack
