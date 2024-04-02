import React, { Fragment } from 'react'
import { getTheme, aliasResolver, getNTheme } from '../../utils/utils'

function Nav(props) {
  let rStyle = aliasResolver(props)
  const {name} = props
  const theme = getTheme()
  const ntheme = getNTheme()
  const mStyle = {...theme, ...ntheme[name], ...rStyle}

  return <nav style={mStyle}>{props.children}</nav>
}

export default Nav
