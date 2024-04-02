import React from 'react'
import style from '../../index.css'
import { getTheme, aliasResolver, getNTheme } from '../../utils/utils'

function Header(props) {
  const rStyle = aliasResolver(props)
  const {name} = props
  const theme = getTheme()
  const ntheme = getNTheme()
  const mStyle = {...theme, ...ntheme[name], ...rStyle}

  return <header style={mStyle}>{props.children}
  </header>
}

export default Header
