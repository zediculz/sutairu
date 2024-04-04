import React from "react";
import { resolveSch } from "../../utils/util";
import style from '../../index.css'

const Avatar = (props) => {
    
    const {user, nick, size, type} = props
    
    const theme = getTheme()
    const dSize = AvatarSize(size)
    const vStyle = AvatarVariant(type, theme)
    const m = resolveSch(props)
    const mStyle = {...m, ...dSize, ...vStyle}
    const child = nick === undefined || nick === '' ? generateAvatarName(user) : generateAvatarNick(nick)
    
    return (
        <div style={mStyle} className={style.avatarwrap}>
            <span>{child}</span>
        </div>
    )
}

// resolve avatar props
// resolve avatar background props 

export const aliasResolver = (props, gt) => {
    let style = {
      alignItems: props.align === undefined ? 'center' : props.align,
      justifyContent: props.justify === undefined ? 'center' : props.justify,
      color: props.fg === undefined ? gt?.color : props.fg,
      FontSize: props.fsize === undefined || props.fsize === '' ? 'initial' : props.fsize,
      backgroundColor: props.bg === undefined ? gt?.backgroundColor : props.bg,
      border: props.b === undefined ? 'none' : props.b
    }
  
    return style
  
}


// generate avatar name 
const generateAvatarName = (name) => {
    let _n = name.split(' ')
    let first = _n[0].slice(0, 1)
    let second = _n[1].slice(0, 1)

    let init = `${first}${second}`
   return init
}

// generate avatar name in 1 value
const generateAvatarNick = (nick) => {
    let name = nick[0].slice(0, 1)
    return name
}



// generate avatar variant 
const AvatarVariant = (_type, gt) => {
    let type = _type === undefined ? 'normal' : _type
    let color

    const _v = [
        {variant: 'normal', style: {}},
        {variant: 'outline', style: {
            border: `1px solid ${gt.color}`
        }},
        {variant: 'thick', style: {
            border: `4px solid ${gt.color}`
        }}
    ]

    let n = _v.filter(t => t.variant === type)
   return n[0].style
}

// generate and resolve avatar size 
const AvatarSize = (_size) => {
    let size = _size === undefined ? 'm' : _size
    const _s = [
        {size: 's', style: {
            width: '40px',
            height: '36px',
            fontSize: '14px'
        }},

        {size: 'm', style: {
            width: '50px',
            height: '43px',
            fontSize: '18px'
        }},

        {size: 'l', style: {
            width: '65px',
            height: '60px',
            fontSize: '22px'
        }}
    ]

   let n = _s.filter(s => s.size === size)
   return n[0].style

}

export default Avatar
