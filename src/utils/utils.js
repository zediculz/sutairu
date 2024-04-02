// we a need a function that can get css styling in specific format and return a clean css without breaking the css
class NamedTheme {
    constructor() {
        this.theme = {}
    }

    use(theme) {
        this.theme = theme
    }

    get() {
        return this.theme
    }
}

const ntheme = new NamedTheme()

// receive custom styling
export const useNTheme = (customStyles) => ntheme.use(customStyles)
export const getNTheme = () => ntheme.get()



// global theme 
//global styling
class GlobalTheme {
    constructor() {
        this.theme = {}
    }

    use(theme) {
        this.theme = theme
    }

    get() {
        return this.theme
    }

}


const gtheme = new GlobalTheme()
// receive custom styling
export const useTheme = (customStyles) => gtheme.use(customStyles)
export const getTheme = () => gtheme.get()


export const aliasResolver = (props, gt) => {
    let style = {
      width: props.w === undefined ? 'initial' : props.w,
      height: props.h === undefined ? 'initial' : props.h,
      alignItems: props.align === undefined ? 'center' : props.align,
      justifyContent: props.justify === undefined ? 'center' : props.justify,
      flexDirection: props.dir === undefined ? 'row' : props.dir,
      backgroundColor: props.bg === undefined ? gt?.backgroundColor : props.bg,
      color: props.fg === undefined ? gt?.color : props.fg,
      fontSize: props.font === undefined || props.font === '' ? 'initial' : props.font
    }
  
    return style
  
}

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 425px)')


class QMTheme {
    constructor() {
        this.theme = {}
    }

    use(theme) {
        this.theme = theme
    }

    get() {
        return this.theme
    }
}

const qtheme = new QMTheme()

// receive custom styling
export const useMedia = (customStyles) => qtheme.use(customStyles)
export const getMedia = () => qtheme.get()
