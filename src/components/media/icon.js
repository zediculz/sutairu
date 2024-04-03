import React from "react";

import style from '../../index.css'

const Icon = (props) => {
    const {src} = props
    return (
        <span className={style.icon}>{src}</span>
    )
}

export const aliasResolver = (props) => {
    let style = {
      width: props.w === undefined ? 'initial' : props.w,
      height: props.h === undefined ? 'initial' : props.h,
      alignItems: props.align === undefined ? 'initial' : props.align,
      justifyContent: props.justify === undefined ? 'initial' : props.justify,
      backgroundColor: props.bg === undefined ? 'initial' : props.bg,
      color: props.fg === undefined ? 'initial' : props.fg,
      flex: props.flex === undefined || props.flex === '' ? 'initial' : props.flex,
      size: props.flex === undefined || props.flex === '' ? 'initial' : props.flex
    }
  
    return style
  
}

export default Icon