import React from 'react'
import style from '../../index.css'
import { getTheme, aliasResolver, getNTheme } from '../../utils/utils'


const Heading = (props) => {
  let rStyle = aliasResolver(props)
  const {name} = props
  const theme = getTheme()
  const ntheme = getNTheme()
  const mStyle = {...theme, ...ntheme[name], ...rStyle}

  return <h1 className={style.logo} style={mStyle}>{props.children}</h1>
}

export default Heading
