import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Container, loadTheme,} from 'sutairu'

import 'sutairu/dist/index.css'

// practice simple theme customizing
export const theme = {
   light: {
        color: '#222',
        bg: '#fff'
   },
   dark: {},
   media: {
        ip: '(max-width: 768px)',
        mb: '(max-width: 425px)',
        sm: '(max-width: 375px)',
    }
}

loadTheme(theme)


ReactDOM.render(<Container mode="dark"><App /></Container>, document.getElementById('root'))
