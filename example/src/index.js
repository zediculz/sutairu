import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Container, useTheme, useNTheme} from 'sutairu'
import {theme, gt} from './style.js'

import 'sutairu/dist/index.css'

useTheme(gt)
useNTheme(theme)

ReactDOM.render(<Container><App /></Container>, document.getElementById('root'))
