import React from 'react'
import { getTheme, getNTheme, aliasResolver, useMedia } from '../../utils/utils'
import style from '../../index.css'

const Stack = (props) => {
  const {name, mquery} = props
  const theme = getTheme()
  let qStyle = useMedia(mquery, props)
  const ntheme = getNTheme()
  const childs = props.children
  let rStyle = aliasResolver(props)
  const allStyles = {...ntheme[name], ...theme, ...rStyle}
  const mStyle = qStyle === undefined ? allStyles : qStyle

  console.log(mStyle)
  return (
    <div style={mStyle} className={style.stack}>
      {childs}
    </div>
  )
}

export default Stack
