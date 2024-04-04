import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Container, useTheme} from 'sutairu'

import 'sutairu/dist/index.css'

// practice simple theme customizing
export const theme = {
   light: {
        color: '#222',
        backgroundColor: '#fff'
   },
   dark: {},
   media: {
        base: '(min-width: 1024px)',
        ip: '(max-width: 768px)',
        mb: '(max-width: 425px)',
        sm: '(max-width: 375px)',
    }
}

useTheme(theme)


ReactDOM.render(<Container mode="dark"><App /></Container>, document.getElementById('root'))
