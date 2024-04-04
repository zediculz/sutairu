import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Container, useTheme, setMedia} from 'sutairu'

import 'sutairu/dist/index.css'

// practice simple theme customizing
export const theme = {
   light: {
    color: '#222',
    backgroundColor: '#fff'
   },
   dark: {
    color: '#fff',
    backgroundColor: '#222'
   }
}

useTheme(theme)

setMedia({
    base: '(min-width: 1024px)',
    ip: '(max-width: 768px)',
    mb: '(max-width: 425px)',
    m: '(max-width: 375px)',
})


ReactDOM.render(<Container mode="dark"><App /></Container>, document.getElementById('root'))
