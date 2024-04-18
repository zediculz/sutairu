// a css mobile first framework that comes with headless components
// can be customize with flexible ability on flex and grid
import Container from './utils'

//LAYOUTS
// header main tag and its blocks
import Header from './components/header/Header'
import Nav from './components/header/Nav'
import NavItem from './components/header/Link'

// Block and Box layout component 
import Block from './components/body/Block'
import Box from './components/body/box'

// Topographys components
import H from './components/topography/heading'
import Text from './components/topography/text'

// DISCLOSURE COMPONENTS
// notify main and its blocks
import Notify from './components/alert/notify'
import { NotifyBody, NotifyHead } from './components/alert/notify'


// button component
import Button from './components/button/index'


// alerts main and alert blocks
import Alert from './components/alert/alert'
import { AlertBody, AlertHead, AlertIcon } from './components/alert/alert'


// more components
import Avatar from './components/media/avatar'
import Icon from './components/media/icon'

import AppBar from './components/appHeader'
import BottomDrawer from './components/appHeader/bottom'


// tooling 
// hooks
import { loadTheme } from './utils/resolve'

export {
  Container,
  H, Text,
  Block, Box, 
  Header, Nav, NavItem, loadTheme
}
