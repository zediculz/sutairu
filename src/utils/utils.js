// we a need a function that can get css styling in specific format and return a clean css without breaking the css
class Theme {
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

const theme = new Theme()

// receive custom styling
export const useTheme = (customStyles) => theme.use(customStyles)
export const getTheme = () => theme.get()


class QTheme {
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


const qtheme = new QTheme()

export const useQTheme = (query, qStyle) => {
    const {matches} = window.matchMedia(`(max-width: ${query})`)   
    qtheme.use(qStyle)
}

export const getQTheme = () => theme.get()
