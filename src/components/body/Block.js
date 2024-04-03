import React from 'react'
import { getTheme, aliasResolver, getNTheme, useMedia } from '../../utils/utils'
import style from '../../index.css'

const Block = (props) => {
  let rStyle = aliasResolver(props)
  const {name, mquery} = props
  let qStyle = useMedia(mquery, props)
  const theme = getTheme()
  const ntheme = getNTheme()
 
  const allStyles = {...ntheme[name], ...theme, ...rStyle}
  const mStyle = qStyle === undefined ? allStyles : qStyle

  return <div style={mStyle} className={style.block}>{props.children}</div>
}

export default Block
