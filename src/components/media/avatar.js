import React from "react";
import {getTheme} from '../../utils/utils'
import style from '../../index.css'

const Avatar = (props) => {
    
    const {src, user} = props
    let rStyle = aliasResolver(props)
    const {name} = props
    const theme = getTheme()
    const mStyle = {...theme[name], ...rStyle}
    const an = src === undefined || src === '' ? generateAvatarName(user) : src
    const avatartBackground = avatarBg(props.bg)

    return (
        <div style={avatartBackground} className={style.avatarwrap}>
            <span style={mStyle}>{an}</span>
        </div>
    )
}


export const aliasResolver = (props) => {
    let style = {
      width: props.w === undefined ? 'initial' : props.w,
      height: props.h === undefined ? 'initial' : props.h,
      alignItems: props.align === undefined ? 'initial' : props.align,
      justifyContent: props.justify === undefined ? 'initial' : props.justify,
      color: props.fg === undefined ? 'initial' : props.fg,
      flex: props.flex === undefined || props.flex === '' ? 'initial' : props.flex,
      FontSize: props.fsize === undefined || props.fsize === '' ? 'initial' : props.fsize,
    }
  
    return style
  
}

const generateAvatarName = (name) => {
    let _n = name.split(' ')
    let first = _n[0].slice(0, 1)
    let second = _n[1].slice(0, 1)

    let init = `${first}${second}`
   return init
}


export const avatarBg = (bg) => {
    let style = {
      backgroundColor: bg === undefined ? 'initial' : bg,
    }
    return style
}

const AvatarVariant = (type) => {
    const _v = [
        {variant: 'outline', style: {
            borderColor: ''
        }},

        {size: 'm', style: {
            width: '54px',
            height: '54px'
        }},

        {size: 'l', style: {
            width: '68px',
            height: '68px'
        }}
    ]
    _v.map(s => {
        if(s.size === size) return s.style
    })
}

const AvatarSizes = (size) => {
    const _s = [
        {size: 's', style: {
            width: '45px',
            height: '44px'
        }},

        {size: 'm', style: {
            width: '54px',
            height: '54px'
        }},

        {size: 'l', style: {
            width: '68px',
            height: '68px'
        }}
    ]
    _s.map(s => {
        if(s.size === size) return s.style
    })
}

export default Avatar
