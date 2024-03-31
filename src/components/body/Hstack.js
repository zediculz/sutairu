import React from 'react'
import style from '../../index.css'
import { getTheme } from '../../utils/utils'

const HStack = (props) => {
  const {name} = props
  const theme = getTheme()
  const childs = props.children
  return (
    <div style={theme[name]} className={style.secondStack}>
      {childs}
    </div>
  )
}

export default HStack
