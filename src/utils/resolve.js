class Theme {
    constructor() {
        this.theme = {}
        this.bp = {
            ip: '(max-width: 768px)',
            mb: '(max-width: 425px)',
            sm: '(max-width: 375px)',
        }
    }

    init(theme) {
        this.theme = theme
        this.bp = theme?.media
        return this
    }

    get() {
        return this.bp
    }
}
//init theme class
let _theme = new Theme()

//function to load theme
export let loadTheme = (theme) => _theme.init(theme)


export const getBp = () => {
    return _theme.bp
}



export function aRes(props, p) {
    
    let style = {
        width: p?.$w === undefined ? props?.$w === undefined ? 'initial' : props?.$w : p?.$w,
        height: p?.$h === undefined ? props?.$h === undefined ? 'initial' : props.$h : p?.$h,
        display: p?.display === undefined ? props?.display === undefined ? 'flex' : props?.display : p?.display,
        'justify-content': p?.$justify === undefined ? props.$justify === undefined ? 'center' : props?.$justify : p?.$justify,
        'align-items': p?.$align === undefined ? props.$align === undefined ? 'center' : props?.$align  : p?.$align,
        'flex-direction': p?.$dir === undefined ? props.$dir === undefined ? 'row' : props?.$dir : p?.$dir,
        background: p?.$bg === undefined ? props?.$bg === undefined ? '#fff' : props?.$bg : p?.$bg,
        color: p?.color === undefined ? '#222' : p?.color,
        transition: '.4s ease-in', 
        cursor: 'pointer',
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