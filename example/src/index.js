import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Container, useTheme, setMedia} from 'sutairu'
import {theme} from './style.js'

import 'sutairu/dist/index.css'

useTheme(theme)

setMedia({
    base: '(min-width: 1024px)',
    ip: '(max-width: 768px)',
    mb: '(max-width: 425px)',
    m: '(max-width: 375px)',
})


ReactDOM.render(<Container><App /></Container>, document.getElementById('root'))
