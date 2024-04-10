
export function aRes(props, p) {
    
    let style = {
        width: p?.$w === undefined ? props?.$w === undefined ? 'initial' : props?.$w : p?.$w,
        height: p?.$h === undefined ? props?.$h === undefined ? 'initial' : props.$h : p?.$h,
        display: p?.display === undefined ? props?.display === undefined ? 'flex' : props?.display : p?.display,
        'justify-content': p?.$justify === undefined ? 'center' : p?.$justify,
        'align-items': p?.$align === undefined ? 'center' : p?.$align,
        'flex-direction': p?.$dir === undefined ? props.$dir === undefined ? 'row' : props?.$dir : p?.$dir,
        background: p?.$bg === undefined ? props?.$bg === undefined ? '#fff' : props?.$bg : p?.$bg,
        color: p?.color === undefined ? '#222' : p?.color,
        transition: '.4s ease-in',
        border: p?.$b === undefined ? props?.$b === undefined ? '' : props?.$b : p?.$b,
        'box-shadow': p?.$bs === undefined ? props?.$bs === undefined ? '' : props?.$bs : p?.$bs,
        'border-radius': p?.$br === undefined ? props?.$br === undefined ? '' : props?.$br : p?.$br,
        ...props
    }
    
   
    return style
}



export function tR(props, p) {
    let style = {
        'font-size': p?.$font === undefined ? props?.$font === undefined ? '' : props?.$font : p?.$font,
        background: p?.$bg === undefined ? props?.$bg === undefined ? 'transparent' : props?.$bg : p?.$bg,
        color: p?.color === undefined ? '#222' : p?.color,
        transition: '.4s ease-in',
        'text-align': p?.$talign === undefined ? props?.$talign === undefined ? '' : props?.$talign : p?.$talign,
        ...props
    }
    
   
    return style
}