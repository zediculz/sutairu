import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Container, useTheme, useQTheme} from 'sutairu'
import theme from './style.js'

import 'sutairu/dist/index.css'

useTheme(theme)

useQTheme('425px', {
    color: 'red',
    backgroundColor: 'brown'
})

ReactDOM.render(<Container><App /></Container>, document.getElementById('root'))
