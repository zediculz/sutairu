import React from 'react'
import style from '../../index.css'
import { getTheme } from '../../utils/utils'

const VStack = (props) => {
  const {name} = props
  const theme = getTheme()
  const childs = props.children
  return (
    <div style={theme[name]} className={style.firstStack}>
      {childs}
    </div>
  )
}

export default VStack
