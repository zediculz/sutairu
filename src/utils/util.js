
class GlobalTheme {
    constructor() {
        this.theme = {}
        this.media = {}
    }

    use(theme) {
        this.theme = theme
    }


    set(media) {
        this.media = media
    }

    get() {
        return this.theme
    }

}


const gtheme = new GlobalTheme()
// receive custom styling
export const useTheme = (customStyles) => gtheme.use(customStyles)
export const getTheme = () => gtheme.get()
export const setMedia = (media) => gtheme.set(media)


export const aR = (props) => {
    let style
    let gt = getTheme()
    const {base, ip, mb, m} = gtheme.media
    
    const baseQuery = window.matchMedia(base)
    const ipadQuery = window.matchMedia(ip)
    const mobileQuery = window.matchMedia(mb)
    const smallQuery = window.matchMedia(m)

    if (smallQuery.matches) {
        let rStyle = {...props, ...props.m}
        style = aliasResolver(rStyle, gt)
        return style

    } else if(mobileQuery.matches) {
       let rStyle = {...props, ...props.mb}
        style = aliasResolver(rStyle, gt)
        
        return style 

    } else if(ipadQuery.matches) {
        let rStyle = {...props, ...props.ip}
        style = aliasResolver(rStyle, gt)
        
        return style 

    } else if(baseQuery.matches) {
        let rStyle = {...props, ...props}
        style = aliasResolver(rStyle, gt)
        
        return style
    }
    
}




export const aliasResolver = (props) => {
    let gt = getTheme()
    
    let style = {
      width: props.w === undefined ? 'initial' : props.w,
      height: props.h === undefined ? 'initial' : props.h,
      alignItems: props.align === undefined ? 'center' : props.align,
      justifyContent: props.justify === undefined ? 'center' : props.justify,
      flexDirection: props.dir === undefined ? 'row' : props.dir,
      backgroundColor: props.bg === undefined ? gt?.backgroundColor : props.bg,
      color: props.fg === undefined ? gt?.color : props.fg,
      fontSize: props.font === undefined || props.font === '' ? 'initial' : props.font,
      display: props.dis === undefined || props.dis === '' ? '' : props.dis,
      border: props.bor === undefined || props.bor === '' ? '' : props.bor,
      boxShadow: props.bs === undefined || props.bs === '' ? '' : props.bs
    }
  
    return style
  
}