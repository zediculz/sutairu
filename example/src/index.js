import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Container, useTheme} from 'sutairu'

import 'sutairu/dist/index.css'

const theme = useTheme({
    backgroundColor: '#eaebf0',
    color: 'brown',
    font: {
        primary: 18,
        secondary: 14
    }
})

ReactDOM.render(<Container theme={theme}>
        <App />
    </Container>, document.getElementById('root'))
