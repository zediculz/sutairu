
// handle global theme
class GlobalTheme {
    constructor() {
        this.theme = {}
        this.bp = {
            ip: '(max-width: 768px)',
            mb: '(max-width: 425px)',
            sm: '(max-width: 375px)',
        }
    }

    use(theme) {
        this.theme = theme
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

}

// init globaltheme
const gtheme = new GlobalTheme()

//HOOKS
// receive the UI theme
export const useTheme = (customStyles) => gtheme.use(customStyles)

//in-lib hook
export const getTheme = () => {
    return gtheme.get()
}

export const getBp = () => {
    return gtheme.bp
}


//HOOKS TO CHANGE THE UI DYNAMICAL toggle dark and light 
export const Toggle = () => {
    let scheme = window.matchMedia('(prefers-color-scheme: dark)')

    if (scheme.matches) {
        gtheme.toggle(true)
       
    }else {
        gtheme.toggle(false)
    }
    
}
