import React from 'react'
import style from '../../index.css'
import { getTheme, aliasResolver, getNTheme } from '../../utils/utils'


function AppHeader(props) {
  let rStyle = aliasResolver(props)
  const {name} = props
  const theme = getTheme()
  const ntheme = getNTheme()
  const mStyle = {...theme, ...ntheme[name], ...rStyle}

  return <div style={mStyle} className={style.appheader}>
    {props.children}
  </div>
}

export default AppHeader
