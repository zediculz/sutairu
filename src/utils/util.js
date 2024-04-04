
// handle global theme
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

    toggle(opt) {
        // take the one you want to change
        // change it and set the theme 
        //this.theme = selected
        if (opt) {
            let dark = this.theme.light 
            let light = this.theme.dark
            let nt = {dark, light}
            this.theme = nt
        }else {
            let light = this.theme.dark 
            let dark = this.theme.light
            let nt = {dark, light}
            this.theme = nt
        }
        
    }

    changetheme (theme) {
        
    }

}

// init globaltheme
const gtheme = new GlobalTheme()

//HOOKS
// receive custom styling
export const useTheme = (customStyles) => gtheme.use(customStyles)

export const setMedia = (media) => {
    gtheme.set(media)
}

//in-lib hook
export const getTheme = () => {
    return gtheme.get()
}

// handle the color scheme 
export const resolveSch = (props) => {
    let style
    let gt = getTheme()
    let scheme = window.matchMedia('(prefers-color-scheme: dark)')

    if (scheme.matches) {
        style = aR(props, gt?.dark)
        return style
    }else {
        style = aR(props, gt?.light)
        return style
    }
}

// AR means all resolve 
// this hook resolve and return css in build time
// handle the responsive
export const aR = (props, gt) => {
    const {neo} = props
    let style
    const {base, ip, mb, m} = gtheme.media
    let rNeo = neoResolver(neo) 

    const baseQuery = window.matchMedia(base)
    const ipadQuery = window.matchMedia(ip)
    const mobileQuery = window.matchMedia(mb)
    const smallQuery = window.matchMedia(m)

    if (smallQuery.matches) {
        let rStyle = {...props, ...props.m}
        style = aliasResolver(rStyle), gt
        return {...style, ...rNeo}

    } else if(mobileQuery.matches) {
       let rStyle = {...props, ...props.mb}
        style = aliasResolver(rStyle, gt)
        return {...style, ...rNeo}

    } else if(ipadQuery.matches) {
        let rStyle = {...props, ...props.ip}
        style = aliasResolver(rStyle, gt)
        return {...style, ...rNeo}
        
    } else if(baseQuery.matches) {
        let rStyle = {...props, ...props}
        style = aliasResolver(rStyle, gt)
        return {...style, ...rNeo}
    }
    
}


// main alias resolver 
// this function take a shorthand and trnasalte it to css, also rely on globaltheme
export const aliasResolver = (props, gt) => {
    
    let style = {
      width: props?.w === undefined ? 'initial' : props.w,
      height: props?.h === undefined ? 'initial' : props.h,
      alignItems: props?.align === undefined ? 'center' : props.align,
      justifyContent: props?.justify === undefined ? 'center' : props.justify,
      flexDirection: props?.dir === undefined ? 'row' : props.dir,
      backgroundColor: props?.bg === undefined ? gt?.backgroundColor : props.bg,
      color: props?.fg === undefined ? gt?.color : props.fg,
      fontSize: props?.font === undefined || props.font === '' ? 'initial' : props.font,
      display: props?.dis === undefined || props.dis === '' ? '' : props.dis,
      border: props?.bor === undefined || props.bor === '' ? '' : props.bor,
      boxShadow: props?.bs === undefined || props.bs === '' ? '' : props.bs
    }
  
    return style
  
}


// resolve neo props
const neoResolver = (n) => {
    let neo = n === undefined || n === '' ? {} : n
    
    let style = {
      border: neo?.b === undefined || neo.b === '' ? '' : neo.b,
      borderBottom: neo?.bb === undefined || neo.bb === '' ? '' : neo.bb,
      boxShadow: neo?.bs === undefined || neo.bs === '' ? '' : neo.bs,
    }
    
   
    return style
   
}




export const Toggle = (opt) => {
    let scheme = window.matchMedia('(prefers-color-scheme: dark)')

    if (scheme.matches) {
        gtheme.toggle(true)
       
    }else {
        gtheme.toggle(false)
    }
    
}