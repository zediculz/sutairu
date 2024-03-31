
const gt = {
    backgroundColor: '#eaebf0',
    color: '#222',
    font: {
        primary: '20px',
        secondary: '13px',
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
}


const theme = {
    header: {
        color: gt.color,
        fontSize: gt.font.secondary,
        backgroundColor: gt.backgroundColor
    },
    headerBlock: {
        color: gt.color,
        fontSize: gt.font.primary,
        backgroundColor: gt.backgroundColor,
        width: '100%',
        height: '300px',
        ...gt.flex,
    },
    vStack: {
        color: gt.color,
        fontSize: gt.font.secondary,
        backgroundColor: gt.backgroundColor,
        width: '100%',
        height: '200px'
    },

    box: {
        height: '80%',
        flexBasis: '30%',
        backgroundColor: '#fff',
        ...gt.flex
    },
    appAlert: {
        margin: '1em'
    }
}

export default theme